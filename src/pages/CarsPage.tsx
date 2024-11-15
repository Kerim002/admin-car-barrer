import CarsContent from "@/entities/cars/ui/CarsContent";
import { carsHead } from "@/shared/constants/tableHeads";
import TableHead from "@/shared/ui/TableHead";

const CarsPage = () => {
  return (
    <div className="w-full">
      <TableHead tableh={carsHead} />
      <CarsContent />
    </div>
  );
};

export default CarsPage;
