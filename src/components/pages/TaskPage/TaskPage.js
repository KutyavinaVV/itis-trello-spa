import {useParams, Link} from  'react-router-dom'
import list from '../../../config/tasks';
import routs from "../../../config/routes";
import ToDoListItem from "../../atoms/ToDoListItem";
import { Wrapper } from './styled'

const TaskPage = () => {
    const { id: idQ } = useParams();
    const task = list.find(({id}) => id === +idQ );
    return (
        <Wrapper>
            <ToDoListItem checked={task.checked}>{task.text} </ToDoListItem>
            <Link to={routs.TASKS}> Back </Link>
        </Wrapper>
    )
}

export default TaskPage;