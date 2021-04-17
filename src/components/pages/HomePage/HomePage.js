import routes from '../../../config/routes';
import MainLink from '../../atoms/MainLink'
import Background from '../../molecules/Background';

const Homepage = () => (
    <>
      <Background />
      <MainLink link={routes.TASKS}> Tasks</MainLink>
      <MainLink link={routes.TASKAPI}>Tasks from api</MainLink>
    </>
);

export default Homepage;