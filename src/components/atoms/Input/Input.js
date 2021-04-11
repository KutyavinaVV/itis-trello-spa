import { StyledInput } from './styled'

const Input = ({ onChange, ...props }) => {
    const handleChange = (ev) => {
        onChange(ev.target.value);
    };
    return <StyledInput {...props} onChange={handleChange} />;
};

export default Input;
