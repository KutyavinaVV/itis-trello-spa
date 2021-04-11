import React from "react";
import {Link} from 'react-router-dom'
import { StyledLink} from "./styled";

const MainLink = ({ link }) => (
    <>
    <StyledLink><Link to={link} >Tasks</Link></StyledLink>
    </>
)

export default MainLink;