import { ExistsCarsContent } from "@/entities/cars";
import { existcarsHead } from "@/shared/constants/tableHeads";
import TableHead from "@/shared/ui/TableHead";

const HomePage = () => {
  return (
    <div className="w-full">
      <TableHead tableh={existcarsHead} />
      <ExistsCarsContent />
    </div>
  );
};

export default HomePage;
