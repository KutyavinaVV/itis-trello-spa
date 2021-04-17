import { useParams } from  'react-router-dom'
import routs from "../../../config/routes";
import React from "react";
import ToDoListItem from "../../atoms/ToDoListItem";
import { Wrapper, LinkWrapper } from './styled'
import Loader from "../../atoms/Loader";
import useTask from "../../../hooks/useTask";
import {VerticalLine} from "../ToDoPage/styled";
import SmallLink from "../../atoms/SmallLink";

const TaskPage = () => {
    const { id: id } = useParams();
    const {task, loading} = useTask(id);

    return (
        <>
            <VerticalLine />
            <Wrapper>
                <ToDoListItem checked={false} info={task?.createdAt}>{task?.title} </ToDoListItem>
                <LinkWrapper>
                    <SmallLink  link={routs.LISTS}> Back </SmallLink>
                </LinkWrapper>
                {loading && <Loader />}
            </Wrapper>
        </>
    )
}


export default TaskPage;