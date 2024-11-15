import { useDateConverter } from "../hooks/useDateConverter";

type Props = {
  item: CarItemSchema;
  index: number;
};

const CarRow2 = ({ item, index }: Props) => {
  return (
    <div key={item.id} className="flex items-center text-xl">
      <div className="flex-[1] text-center">{index}</div>
      <div className="flex-[5] text-center">{item.carNumber}</div>
      <div className="flex-[5] text-center">
        {item.userName ? item.userName : "Unknown"}
      </div>
      <div className="flex-[3] text-center">
        {useDateConverter(item.createdAt)}
      </div>
      <div className="flex-[3] text-center">
        {useDateConverter(item.updatedAt)}
      </div>
    </div>
  );
};

export default CarRow2;
