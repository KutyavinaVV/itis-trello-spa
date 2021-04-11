import {useState} from 'react';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import { Wrapper } from "./styled";

const ToDoForm = ({ disabled, onSubmit }) => {
    const [value, setValue] = useState('');

    const handleSubmit = () => {
        onSubmit(value);
        setValue('');
    };

    return (
        <Wrapper>
            <Input disabled={disabled} onChange={setValue} value={value} />
            <Button primary disabled={disabled} onClick={handleSubmit}>
                Add!
            </Button>
        </Wrapper>
    );
};

export default ToDoForm;
