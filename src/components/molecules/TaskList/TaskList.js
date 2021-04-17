import React from 'react'
import Task from "../../atoms/Task";
import { Wrapper, Title, StyledList } from "./styled";


const TaskList = ({ list }) => {
    const { tasks, title } = list;

    return (
        <Wrapper>
            <Title>{title}</Title>
            <StyledList>
                {tasks.map(( task ) => (
                    <Task task={ task } />
                ))}
            </StyledList>
        </Wrapper>
    );
}

export default TaskList;