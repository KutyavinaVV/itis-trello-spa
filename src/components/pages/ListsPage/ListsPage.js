import React from 'react'
import useLists from '../../../hooks/useLists';
import { Wrapper } from '../ToDoPage/styled'
import Loader from "../../atoms/Loader";

const ListPage = () => {

    const {lists, loading} = useLists();
    console.log(lists)
    return (
        <Wrapper>
            {loading && <Loader />}
        </Wrapper>
    )
}

export default ListPage;