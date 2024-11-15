import { axiosWithAuth } from "../../../shared/api/interceptor";

class CarsService {
  private url = "/car";
  async getExistCars({ page, perPage }: CarsRequest) {
    const res = await axiosWithAuth.get<CarsResponse>(`${this.url}/exists`, {
      params: {
        perPage,
        page,
      },
    });
    return res.data;
  }
  async getCars({ page, perPage }: CarsRequest) {
    const res = await axiosWithAuth.get<CarsResponse>(`${this.url}`, {
      params: {
        perPage,
        page,
      },
    });
    return res.data;
  }
}

export const carsService = new CarsService();
