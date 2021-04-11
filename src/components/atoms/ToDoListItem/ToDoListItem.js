import { StyledItem } from './styled'


const ToDoListItem = ({checked, children}) => (
    <StyledItem checked={checked}>
    {children}</StyledItem>
);

export default ToDoListItem;
