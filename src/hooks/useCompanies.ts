import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "src/services/companies";

const useCompanies = () => {
    const { data, isLoading, isError, isPending} = useQuery({
        queryKey: ['companies'],
        queryFn: getCompanies
    })

    return {
        companies: data,
        isLoading,
        isError,
        isPending
    }
};

export {useCompanies};