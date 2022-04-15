import path from 'path';
import { promises as fsAsync } from 'fs';
import fs from 'fs';
import { promises as fsPromise } from 'fs';
import { TFolderPath, TResult } from '../type';
import { resultTemplate } from './requestServer';
import { logMessage } from './functions';
import { ERROR_LOG_ASYNC_MESSAGE } from '../constant';

const paths: { [key: string]: string } = {
	['houses.json']: path.join(__dirname, '../../server/cache/houses.json'),
};
const createDirectoryIfNot = async (directory: string): Promise<boolean> => {
	let result = false;
	try {
		const isDirectory = checkIfDirectory(directory);
		if (isDirectory) {
			result = true;
		} else {
			createDirectory(directory);
			result = true;
			(' ');
		}
	} catch (error: any) {
		logMessage(
			`${ERROR_LOG_ASYNC_MESSAGE('Common/fileSystem', 'createDirectoryIfNot')}`,
		);
	} finally {
		return result;
	}
};
const createDirectory = (directory: string) => {
	fs.promises.mkdir(path.join(__dirname + '../../', directory), {
		recursive: true,
	});

	// (err: any) => {
	//   if (err) {
	//     console.log(err);
	//   }
	// },
};
const checkIfDirectory = (directory: string): boolean =>
	fs.existsSync(path.join(__dirname + '../', directory));
const isDirectoryCreated = async (
	folderPath: TFolderPath,
): Promise<boolean> => {
	let result = false;
	try {
		const directory = folderPath.folder;
		const subFolder = folderPath.subFolder ? folderPath.subFolder : null;
		const fullPath = subFolder ? directory + '/' + subFolder : directory + '/';

		result = await createDirectoryIfNot(fullPath);
	} catch (error: any) {
		logMessage(
			`${ERROR_LOG_ASYNC_MESSAGE('Common/fileSystem', 'isDirectoryCreated')}`,
		);
	} finally {
	}
	return result;
};
const readFileDataSystem = async (folderPath: TFolderPath) => {
	const result: TResult = { ...resultTemplate };
	try {
		const file = await fsAsync.readFile(paths[folderPath.fileName!], 'utf8');
		if (file && typeof file === 'string') {
			result.state = true;
			result.data = JSON.parse(file);
		}

		return result;
	} catch (error: any) {
		result.serverError = true;
		result.errorMessage = error;
		logMessage(
			`${ERROR_LOG_ASYNC_MESSAGE('Common/fileSystem', 'readFileDataSystem')}`,
		);

		return result;
	}
};
const writeFileDataSystem = async (
	folderPath: TFolderPath,
	object: any,
): Promise<TResult> => {
	const result: TResult = { ...resultTemplate };
	try {
		await fsPromise.writeFile(
			paths[folderPath.fileName!],
			JSON.stringify(object),
			{
				//https://nodejs.org/api/fs.html#fs_file_system_flags
				flag: 'w',
			},
		);
	} catch (error: any) {
		result.serverError = true;
		result.errorMessage = typeof error === 'string' ? error : '';
		logMessage(
			`${ERROR_LOG_ASYNC_MESSAGE('houses/function', 'handleChangingPage')}`,
		);
	} finally {
		return result;
	}
};

export {
	createDirectory,
	checkIfDirectory,
	createDirectoryIfNot,
	isDirectoryCreated,
	readFileDataSystem,
	writeFileDataSystem,
};
