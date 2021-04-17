import React from 'react'
import useLists from '../../../hooks/useLists';
import { Wrapper } from './styled'
import Loader from "../../atoms/Loader";
import TaskList from "../../molecules/TaskList";
import {VerticalLine} from "../ToDoPage/styled";
import SmallLink from "../../atoms/SmallLink";
import routes from "../../../config/routes";
import {LinkWrapper} from "../TaskPage/styled";

const ListPage = () => {

    const {lists, loading} = useLists();
    return (
        <>
            <VerticalLine />
            <Wrapper>
                <LinkWrapper>
                    <SmallLink link={routes.HOME}>Home</SmallLink>
                </LinkWrapper>
                {lists.map(list => (
                    <TaskList list={list} />
                ))}
                {loading && <Loader />}
            </Wrapper>

        </>
    )
}

export default ListPage;