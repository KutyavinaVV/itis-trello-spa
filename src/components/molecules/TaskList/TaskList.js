import React from 'react'
import Task from "../../atoms/Task";
import { Wrapper, Title, StyledList } from "./styled";
import CreateTaskForm from "../CreateTaskForm";


const TaskList = ({ list }) => {
    const { tasks, title, id } = list;

    return (
        <Wrapper>
            <Title>{title}</Title>
            <StyledList>
                {tasks.map(( task ) => (
                    <Task task={ task } />
                ))}
            </StyledList>
            <CreateTaskForm listId={id} />
        </Wrapper>
    );
}

export default TaskList;