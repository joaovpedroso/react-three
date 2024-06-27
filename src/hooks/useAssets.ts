import { useQuery } from "@tanstack/react-query";
import { getAssets } from "src/services/assets";
import { IGetLocation } from "src/services/locations/types";

const useAssets = (params: IGetLocation) => {
    const { data, refetch } = useQuery({
        queryKey: ['assets', params.companyId],
        queryFn: () => getAssets(params),
        enabled: false,
        staleTime: 3600
    });

    return {
        assets: data,
        refetchAssets: refetch
    };
};

export {useAssets};