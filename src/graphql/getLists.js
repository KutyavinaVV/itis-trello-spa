import { gql } from '@apollo/client';

export default gql`
    query getLists {
        lists {
            title
            id
            tasks {
                id
                title
                createdAt
            }
        }
    }
`