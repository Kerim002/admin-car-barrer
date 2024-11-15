interface CarItemSchema {
  id: string;
  carNumber: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  userName: string;
  enterTime: string;
  carId: string;
}

interface CarsResponse {
  data: CarItemSchema[];
  meta: {
    total: number;
    lastPage: number;
    currentPage: number;
    perPage: number;
    prev: number;
    next: number;
  };
}

interface CarsRequest {
  perPage: number;
  page: number;
}
