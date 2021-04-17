import styled from "styled-components";

export const Wrapper = styled.div`
    display: inline-block;
    border: 2px solid slateblue;
    margin: 1rem;
    text-align: center;
    width: 10rem;
    float: left;
    background: white;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(0,0,0,0.4);
`

export const Title = styled.span`
  display: block;
  font-size: 1.25rem;
  padding: 0.5rem 0;
  text-align: center;
  border-bottom: 2px solid slateblue;
  color: white;
  background: slateblue;
`

export const StyledList = styled.ul`
    display: block;
    padding: 1rem;
  
`

export const Task = styled.li`
    list-style: none;
    display: block;
    text-align: left;
    margin: 0.4rem;
    a {
      text-decoration: none;
      color: black;
      :hover {
        text-decoration: underline;
      }
    }
    
`