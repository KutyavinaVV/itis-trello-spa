import { gql } from '@apollo/client';

export default gql`
    query getTask($taskId: Int!) {
        task(id: $taskId) {
            id
            title
            createdAt
        }
    }
`