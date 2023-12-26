import moment from "moment";
import "moment/dist/locale/pt-br";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import type { ICurrentMoment } from "types/date";
import styles from "./styles.module.scss";

moment.locale("pt-br");

export const CurrentMoment = (): ReactElement => {
  const [currentMoment, setCurrentMoment] = useState<ICurrentMoment>({
    date: "",
    time: "",
    weekDay: "",
  });

  useEffect(() => {
    setInterval(() => {
      const now = moment();

      setCurrentMoment({
        date: now.format("DD/MM/YYYY"),
        time: now.format("HH:mm:ss"),
        weekDay: now.format("ddd").toUpperCase(),
      });
    });
  });

  return (
    <span className={styles.label}>
      {`${currentMoment.weekDay} ${currentMoment.date} ${currentMoment.time}`}
    </span>
  );
};
