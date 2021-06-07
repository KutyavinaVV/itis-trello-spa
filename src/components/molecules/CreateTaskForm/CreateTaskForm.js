import React, { useState, useCallback } from "react";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import useCreateTask from "../../../hooks/mutation/useCreateTask";
import { Wrapper } from './styled'

const CreateTaskForm = ({ listId }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [value, setValue] = useState("");

    const onChange = (val) => {
        setValue(val)
    }

    const {create} = useCreateTask();



    const openForm = useCallback(() => {
        setIsFormOpen(!isFormOpen)
    }, [isFormOpen])

    return (
        <Wrapper>
            <Button onClick={openForm}>Create Task</Button>
            {isFormOpen &&
            <>
                <Input onChange={onChange} />
                <Button onClick={() => create(value, listId)}> Create! </Button>
            </>}
        </Wrapper>
    )
};

export default CreateTaskForm;