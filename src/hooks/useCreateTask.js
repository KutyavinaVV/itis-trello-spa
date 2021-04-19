import { useMutation } from '@apollo/client';
import getTasks from '../graphql/queries/getTasks';
import createTask from "../graphql/mutations/createTask";


const useCreateTask = () => {
    const [mutation, { data, error, loading }] = useMutation(createTask, {
        refetchQueries: [{ query: getTasks }],
    });

    const create = async (title, id) => {
        await mutation({ variables: { input: { title, id } } });
    };

    return {
        create,
        data,
        error,
        loading,
    };
};

export default useCreateTask;