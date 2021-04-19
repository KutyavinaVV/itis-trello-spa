import { useQuery } from "@apollo/client";
import getTasks from "../graphql/queries/getTasks";

const useTasks = () => {
    const { data, error, loading } = useQuery(getTasks);
    return {
        tasks: data?.tasks || [],
        loading,
    }
}

export default useTasks;