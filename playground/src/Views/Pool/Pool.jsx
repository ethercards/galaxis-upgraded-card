import { Box } from '@mui/system';
import { DustPools } from 'galaxis-components';
import Header from '../../components/Header';

const PoolTest = ()=>{

	const sx = {
		root: {
			position: 'relative',
			width: '100%',
			pt: '120px',
			pb: '115px',
			mb: '100px',
			overflow: 'hidden',
			transition: 'all .3s',
			backgroundColor: '#FAF9F5',
			px: '20px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		}
	};


	return(
		<>
			<Header/>
			<Box sx={sx.root} id="homeContainer">	
				<DustPools/>
			</Box>
		</>
	);
}

export default PoolTest;