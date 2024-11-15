import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { carsService } from "./cars.service";

export const useExistCars = ({ page, perPage }: CarsRequest) => {
  return useQuery<CarsResponse, Error>({
    queryKey: ["existcars", page],
    queryFn: () => carsService.getExistCars({ page, perPage }),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });
};
