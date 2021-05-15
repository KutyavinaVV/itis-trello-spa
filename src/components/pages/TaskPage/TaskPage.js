import { useParams } from  'react-router-dom'
import routs from "../../../config/routes";
import React from "react";
import ToDoListItem from "../../atoms/ToDoListItem";
import { Wrapper, LinkWrapper } from './styled'
import Loader from "../../atoms/Loader";
import useTask from "../../../hooks/useTask";
import {VerticalLine} from "../ToDoPage/styled";
import SmallLink from "../../atoms/SmallLink";
import useRemoveTask from "../../../hooks/useRemoveTask";

const TaskPage = () => {
    const { id: id } = useParams();
    const {task, loading} = useTask(id);
    const {remove} = useRemoveTask();

    return (
        <>
            <VerticalLine />
            <Wrapper>
                <ToDoListItem id={id} isTask onRemove={remove} checked={false} info={task?.createdAt}>{task?.title} </ToDoListItem>
                <LinkWrapper>
                    <SmallLink  link={routs.LISTS}> Back </SmallLink>
                </LinkWrapper>
                {loading && <Loader />}
            </Wrapper>
        </>
    )
}


export default TaskPage;