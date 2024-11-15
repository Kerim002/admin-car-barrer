import { useSearchParams } from "react-router-dom";

export default function usePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const getPage = (limit?: number) => {
    if (limit)
      return searchParams.get("page")
        ? (Number(searchParams.get("page")) - 1) * limit
        : 0;
    else {
      return searchParams.get("page") ? Number(searchParams.get("page")) : 1;
    }
  };
  const setPage = (page: number) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      page === 1 ? newParams.delete("page") : newParams.set("page", `${page}`);
      return newParams;
    });
  };
  const deletePage = () => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.delete("page");
      return newParams;
    });
  };
  return { getPage, setPage, deletePage };
}
