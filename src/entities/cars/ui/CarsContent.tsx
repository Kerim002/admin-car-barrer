import { usePage } from "@/shared";
import { useCars } from "../api/useCars";
import { Pagination } from "antd";
import CarRow2 from "@/shared/ui/CarRow2";

const CarsContent = () => {
  const { setPage, getPage } = usePage();
  const perPage = 10;
  const { data } = useCars({ page: getPage(), perPage });
  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };
  return (
    <>
      <div className="flex flex-col gap-5 pt-5 h-[80vh] overflow-auto">
        {data?.data.map((item, index) => (
          <CarRow2
            index={getPage(perPage) + index + 1}
            key={item.id}
            item={item}
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

export default CarsContent;
