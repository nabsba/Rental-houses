// @ts-nocheck
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';
import TAutoAddressUI from './type';
import { Span } from '../../atom';
import { useTheme } from '@mui/styles';
import { URL_ADDRESSES } from '../../../../service/Common/constant';
import { CATEGORIES } from '../../../../service/pages/houses/constant';
import { useSelector } from 'react-redux';
import { TReducers } from '../../../../service/Common/type';

// This key was created specifically for the demo in mui.com.
// You need to create a new one for your application.
type Props = {
	data: TAutoAddressUI;
	defaultValue?: any;
};
function loadScript(src: string, position: HTMLElement | null, id: string) {
	if (!position) {
		return;
	}

	const script = document.createElement('script');
	script.setAttribute('async', '');
	script.setAttribute('id', id);
	script.src = src;
	position.appendChild(script);
}

const autocompleteService = { current: null };

interface MainTextMatchedSubstrings {
	offset: number;
	length: number;
}
interface StructuredFormatting {
	main_text: string;
	secondary_text: string;
	main_text_matched_substrings: readonly MainTextMatchedSubstrings[];
}
interface PlaceType {
	description: string;
	structured_formatting: StructuredFormatting;
}

const GoogleMaps: React.FC<Props> = ({ data, defaultValue }) => {
	const {
		dataHouses: { filterSelection },
	} = useSelector((state: TReducers) => state);

	const getValueFromFiltering = () => {
		const defaultValue: any = filterSelection[data.propertyForQuery[0]]
			? filterSelection[data.propertyForQuery[0]]
			: '';
		return defaultValue;
	};
	getValueFromFiltering();
	defaultValue = getValueFromFiltering();
	const [value, setValue] = React.useState<PlaceType | null>(defaultValue);
	const [inputValue, setInputValue] = React.useState('');
	const [options, setOptions] = React.useState<readonly PlaceType[]>([]);
	const loaded = React.useRef(false);
	const theme: any = useTheme();

	if (typeof window !== 'undefined' && !loaded.current) {
		if (!document.querySelector('#google-maps')) {
			loadScript(
				URL_ADDRESSES.google.place,
				document.querySelector('head'),
				'google-maps',
			);
		}
		loaded.current = true;
	}

	const fetch = React.useMemo(
		() =>
			throttle(
				(
					request: { input: string },
					callback: (results?: readonly PlaceType[]) => void,
				) => {
					(autocompleteService.current as any).getPlacePredictions(
						request,
						callback,
					);
				},
				200,
			),
		[],
	);

	React.useEffect(() => {
		let active = true;

		if (!autocompleteService.current && (window as any).google) {
			autocompleteService.current = new (
				window as any
			).google.maps.places.AutocompleteService();
		}
		if (!autocompleteService.current) {
			return undefined;
		}

		if (inputValue === '') {
			setOptions(value ? [value] : []);
			return undefined;
		}

		fetch(
			{ input: inputValue, componentRestrictions: { country: 'uk' } },
			(results?: readonly PlaceType[]) => {
				if (active) {
					let newOptions: readonly PlaceType[] = [];

					if (value) {
						newOptions = [value];
					}

					if (results) {
						newOptions = [...newOptions, ...results];
					}

					setOptions(newOptions);
				}
			},
		);

		return () => {
			active = false;
		};
	}, [value, inputValue, fetch]);

	return (
		<>
			<div style={{ marginBottom: theme.spacing(2) }}>
				<Span data="LOCATION" />
			</div>
			<Autocomplete
				id="google-map-demo"
				sx={{ width: '100%' }}
				getOptionLabel={(option) =>
					typeof option === 'string' ? option : option.description
				}
				filterOptions={(x) => x}
				options={options}
				autoComplete
				includeInputInList
				filterSelectedOptions
				value={value}
				onChange={(event: any, newValue: PlaceType | null) => {
					setOptions(newValue ? [newValue, ...options] : options);
					setValue(newValue);
					data.functionToCall(CATEGORIES.ADDRESS, new Array(newValue));
				}}
				onInputChange={(event, newInputValue) => {
					setInputValue(newInputValue);
				}}
				renderInput={(params) => (
					<TextField {...params} placeholder="Where" fullWidth />
				)}
				renderOption={(props, option) => {
					const matches =
						option.structured_formatting.main_text_matched_substrings;
					const parts = parse(
						option.structured_formatting.main_text,
						matches.map((match: any) => [
							match.offset,
							match.offset + match.length,
						]),
					);

					return (
						<li {...props}>
							<Grid container alignItems="center">
								<Grid item>
									<Box
										component={LocationOnIcon}
										sx={{ color: 'text.secondary', mr: 2 }}
									/>
								</Grid>
								<Grid item xs>
									{parts.map((part, index) => (
										<span
											key={index}
											style={{
												fontWeight: part.highlight ? 700 : 400,
											}}
										>
											{part.text}
										</span>
									))}
									<Typography variant="body2" color="text.secondary">
										{option.structured_formatting.secondary_text}
									</Typography>
								</Grid>
							</Grid>
						</li>
					);
				}}
			/>
		</>
	);
};

export default GoogleMaps;
