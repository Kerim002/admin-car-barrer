import { BiHome } from "react-icons/bi";
import SideLink from "../../shared/ui/SideLink";

const Sidebar = () => {
  return (
    <div className="w-80 h-full">
      <div className="bg-slate-700 h-36 text-white flex items-center justify-center flex-col text-3xl">
        <h2>Saglyk Baylyk</h2>
      </div>
      <div className="h-[calc(100%-9rem)] bg-slate-800">
        <h3 className="text-2xl text-gray-200 p-5">Sahypalar</h3>
        <div className="border-t border-orange-700 text-white p-5 gap-1 flex flex-col">
          <SideLink path="/" title="Home">
            <BiHome className="text-2xl" />
          </SideLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
