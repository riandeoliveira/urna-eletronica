import moment from "moment";
import "moment/locale/pt-br";
import { useEffect, useState } from "react";
import type { ICurrentMoment } from "types/date";

export const CurrentMoment = (): JSX.Element => {
  const [currentMoment, setCurrentMoment] = useState<ICurrentMoment>({
    date: "",
    time: "",
    weekDay: "",
  });

  useEffect(() => {
    setInterval(() => {
      moment.locale("pt-BR");

      const now = moment();

      setCurrentMoment({
        date: now.format("DD/MM/YYYY"),
        time: now.format("HH:mm:ss"),
        weekDay: now.format("ddd").toUpperCase(),
      });
    });
  });

  return (
    <span className="ml-1 text-[15px] tracking-[0.5px]">{`${currentMoment.weekDay} ${currentMoment.date} ${currentMoment.time}`}</span>
  );
};
