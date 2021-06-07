
import { Wrapper } from '../ToDoPage/styled'
import useTasks from "../../../hooks/query/useTasks";
import ToDoList from "../../molecules/ToDoList";
import Loader from "../../atoms/Loader";

const TaskPage = () => {

    const {tasks, loading} = useTasks();
    console.log(tasks)
    return (
        <Wrapper>
            {loading && <Loader />}
            <ToDoList list={tasks}  />
        </Wrapper>
    )
}

export default TaskPage;