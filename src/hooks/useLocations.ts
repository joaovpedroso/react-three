import { useQuery } from "@tanstack/react-query";
import { getLocations } from "src/services/locations";
import { IGetLocation } from "src/services/locations/types";

const useLocations = (params: IGetLocation) => {

    const { data, refetch } = useQuery({
        queryKey: ['location', params.companyId],
        queryFn: () => getLocations(params),
        enabled: false,
        staleTime: 3600
    });

    return {
        locations: data,
        refetchLocations: refetch
    };
};

export {useLocations};