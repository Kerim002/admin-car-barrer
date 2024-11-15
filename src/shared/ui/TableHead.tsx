import { ReactNode } from "react";

type Props = {
  tableh: {
    name: string;
    size: number;
    icon?: ReactNode;
    type?: string;
    onClick?: () => void;
  }[];
};

const TableHead = ({ tableh }: Props) => {
  return (
    <div className="w-full  border bg-slate-600 text-white border-gray-200 flex rounded-t-xl py-2 sticky top-0 z-10">
      {tableh?.map((item, index) => (
        <span
          className={`border-r border-gray-200 flex justify-center font-semibold ${
            tableh.length === index + 1 && "border-none"
          }`}
          onClick={item.onClick}
          key={index}
          style={{ flex: item.size }}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
};

export default TableHead;
