import routes from '../../../config/routes';
import MainLink from '../../atoms/MainLink'
import Background from '../../molecules/Background';

const Homepage = () => (
    <>
      <Background />
      <MainLink link={routes.TASKS} />
    </>
);

export default Homepage;