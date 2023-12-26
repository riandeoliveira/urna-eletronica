import { audios, images } from "assets";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { CurrentMoment } from "../CurrentMoment";
import { ProgressBar } from "../ProgressBar";
import styles from "./styles.module.scss";

export const FinishVote = (): ReactElement => {
  const [loadingCounter, setLoadingCounter] = useState<number>(0);

  useEffect(() => {
    const MILLISECONDS: number = 10;

    const interval = setInterval(() => {
      setLoadingCounter((state) => state + 1);
    }, MILLISECONDS);

    return () => clearInterval(interval);
  });

  return (
    <>
      {loadingCounter <= 100 ? (
        <div className={styles.loading_container}>
          <ProgressBar progress={loadingCounter} />
        </div>
      ) : (
        <div className={styles.moment_container}>
          <div className={styles.moment}>
            <CurrentMoment />
            <img
              src={images.battery}
              alt="Imagem ilustrada de uma bateria verde cheia"
              width={40}
              height={20}
              className={styles.image}
            />
          </div>
          <span className={styles.finish_label}>FIM</span>
          <span className={styles.vote_label}>VOTOU</span>
          <audio autoPlay src={audios.voteCompletionSound} />
        </div>
      )}
    </>
  );
};
