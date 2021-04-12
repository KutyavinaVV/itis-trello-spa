
import { Wrapper } from '../ToDoPage/styled'
import useTasks from "../../../hooks/useTasks";
import ToDoList from "../../molecules/ToDoList";

const TaskPage = () => {

    const {tasks, loading} = useTasks();
    console.log(tasks)
    return (
        <Wrapper>
            <ToDoList list={tasks}  />
        </Wrapper>
    )
}

export default TaskPage;