import { Link } from 'react-router-dom';
import routes from '../../Routes';

const Home = () => {

	


	return(
		<>
			{routes.map(({ path, component, exact }) => (
			<>
				<Link to={path}>{path}</Link>
				<br/>
			</>
          ))}
		</>
	);
}

export default Home;