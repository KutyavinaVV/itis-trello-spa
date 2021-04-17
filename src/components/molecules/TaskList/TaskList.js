import React from 'react'
import CheckBox from "../../atoms/Checkbox";
import {Link} from "react-router-dom";
import { Wrapper, Title, StyledList, Task} from "./styled";

const TaskList = ({ list }) => {

    const handleCheck = (ev, i) => {
        //todo:check
    };

    const [tasks, title] = list;

    return (
        <Wrapper>
            <Title>{title}</Title>
            <StyledList>
                {tasks.map(( {title, id}, i) => (
                    <Task>
                        <CheckBox onChange={(ev) => handleCheck(ev, i)} />
                        <Link to={`tasks/${id}`}>
                        <span>{title}</span>
                        </Link>
                    </Task>
                ))}
            </StyledList>
        </Wrapper>
    );
}