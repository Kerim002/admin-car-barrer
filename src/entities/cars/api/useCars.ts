import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { carsService } from "./cars.service";

export const useCars = ({ page, perPage }: CarsRequest) => {
  return useQuery<CarsResponse, Error>({
    queryKey: ["cars", page],
    queryFn: () => carsService.getCars({ page, perPage }),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });
};
