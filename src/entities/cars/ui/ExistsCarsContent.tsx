import { CarRow, usePage } from "@/shared";
import { useExistCars } from "../api/useExistCars";
import { Pagination } from "antd";
import { useEffect } from "react";
import io from "socket.io-client";
import { queryClient } from "@/shared/api/queryCLient";

const SOCKET_SERVER_URL = "http://192.168.14.108:4200";
const ExistsCarsContent = () => {
  const { setPage, getPage } = usePage();
  const perPage = 10;
  const { data } = useExistCars({ page: getPage(), perPage });
  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    const newSocket = io(SOCKET_SERVER_URL);

    newSocket.on("refreshAdmin", (message: { refresh: boolean }) => {
      if (message.refresh) {
        queryClient.invalidateQueries();
      }
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);
  return (
    <>
      <div className="flex flex-col gap-5 pt-5 h-[80vh] overflow-auto">
        {data?.data.map((item, index) => (
          <CarRow
            item={item}
            index={getPage(perPage) + index + 1}
            key={item.carId}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination
          pageSize={data?.meta.perPage}
          onChange={handlePageChange}
          total={data?.meta.total}
          current={data?.meta.currentPage}
        />
      </div>
    </>
  );
};

export default ExistsCarsContent;
