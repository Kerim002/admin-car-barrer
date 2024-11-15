import { useEffect, useState } from "react";

export function useDateConverter(isoDateString: string) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    if (isoDateString) {
      const date = new Date(isoDateString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
      const year = date.getFullYear();

      setFormattedDate(`${day}.${month}.${year}`);
    }
  }, [isoDateString]);

  return formattedDate;
}
