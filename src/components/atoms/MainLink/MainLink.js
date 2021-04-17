import React from "react";
import {Link} from 'react-router-dom'
import { StyledLink} from "./styled";

const MainLink = ({ link, children }) => (
    <>
        <StyledLink><Link to={link}> {children} </Link></StyledLink>
    </>
)

export default MainLink;