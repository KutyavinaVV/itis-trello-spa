import routes from '../../../config/routes';
import MainLink from '../../atoms/MainLink'
import Background from '../../molecules/Background';
import { LinksWrapper } from './styled'

const Homepage = () => (
    <>
      <Background />
      <LinksWrapper>
          <MainLink link={routes.TASKS}> Tasks</MainLink>
          <MainLink link={routes.TASKAPI}>Tasks from api</MainLink>
          <MainLink link={routes.LISTS}> Lists</MainLink>
      </LinksWrapper>
    </>
);

export default Homepage;