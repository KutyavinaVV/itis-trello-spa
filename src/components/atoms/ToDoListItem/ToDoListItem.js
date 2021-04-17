import {StyledInfo, StyledItem} from './styled'


const ToDoListItem = ({ checked, children, info }) => (
    <StyledItem checked={ checked }>
        <h4>{children}</h4>
        <StyledInfo> { info } </StyledInfo>
    </StyledItem>
);

export default ToDoListItem;
