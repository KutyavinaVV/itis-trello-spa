import {StyledInfo, StyledItem, StyledLink} from './styled'
import React from "react";
import {Link} from "react-router-dom";
import routes from "../../../config/routes";


const ToDoListItem = ({ checked, children, info, onRemove, id, isTask }) => (
    <StyledItem checked={ checked }>
        <h4>{children}</h4>
        <StyledInfo> { info } </StyledInfo>
        {isTask &&
        <>
            <Link to={routes.LISTS}><StyledLink onClick={() => onRemove(id)}>remove</StyledLink></Link>
            <Link to={`edit/${id}`}><StyledLink>edit</StyledLink></Link>
        </>
        }
    </StyledItem>
);

export default ToDoListItem;
