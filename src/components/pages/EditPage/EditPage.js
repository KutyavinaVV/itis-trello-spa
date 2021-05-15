import React from "react";
import EditTaskForm from "../../molecules/EditTaksForm";
import {VerticalLine} from "../ToDoPage/styled";
import {useParams} from "react-router-dom";
import useTask from "../../../hooks/useTask";
import ToDoListItem from "../../atoms/ToDoListItem";
import { Wrapper} from "./styled";
import useUpdateTask from "../../../hooks/useUpdateTask";

export const EditPage = () => {

    const { id: id } = useParams();
    const {task, loading} = useTask(id);
    const { edit } = useUpdateTask();

    return (
        <>
            <VerticalLine />
            <Wrapper>
                <ToDoListItem id={id} checked={false} info={task?.createdAt}>{task?.title} </ToDoListItem>
                <EditTaskForm onSubmit={edit} task={task}>

                </EditTaskForm>
            </Wrapper>
        </>
    )
}

export default EditPage;