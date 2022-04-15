import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

type TTransitionAlerts = {
	severity: 'success' | 'info' | 'warning' | 'error';
	indiceAlert: boolean;
	text: string;
	functionToCall: (state: boolean) => void;
};

const TransitionAlerts: React.FC<TTransitionAlerts> = ({
	severity,
	indiceAlert,
	text,
	functionToCall,
}) => {
	return (
		<Box
			sx={{
				width: '50%',
				position: 'absolute',
				zIndex: '40',
				left: '50%',
				transform: 'translate(-50%, 0)',
			}}
		>
			<Collapse in={indiceAlert}>
				<Alert
					severity={severity}
					action={
						<IconButton
							aria-label="close"
							color="inherit"
							size="small"
							onClick={() => functionToCall(false)}
						>
							<CloseIcon fontSize="inherit" />
						</IconButton>
					}
					sx={{ mb: 2 }}
				>
					{text}
				</Alert>
			</Collapse>
		</Box>
	);
};

export default TransitionAlerts;
