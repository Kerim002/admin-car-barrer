import { useDateConverter } from "../hooks/useDateConverter";

type Props = {
  item: CarItemSchema;
  index: number;
};

const CarRow = ({ item, index }: Props) => {
  return (
    <div className="flex items-center text-xl">
      <div className="flex-[1] text-center">{index}</div>
      <div className="flex-[5] text-center">{item.carNumber}</div>
      <div className="flex-[5] text-center">
        {item.userName ? item.userName : "Unknown"}
      </div>
      <div className="flex-[3] text-center">
        {useDateConverter(item.enterTime)}
      </div>
    </div>
  );
};

export default CarRow;
