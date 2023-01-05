import Image from "next/image";
import { useEffect, useState } from "react";
import { CurrentMoment } from "./CurrentMoment";
import { ProgressBar } from "./ProgressBar";

export const FinishVote = (): JSX.Element => {
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
        <div className="h-full flex items-center justify-center">
          <ProgressBar progress={loadingCounter} />
        </div>
      ) : (
        <div className="h-full flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <CurrentMoment />
            <Image
              src="/assets/images/battery.jpg"
              alt="Imagem ilustrada de uma bateria verde cheia"
              width={40}
              height={20}
              className="m-1"
            />
          </div>
          <span className="absolute text-[143px] tracking-[1.5px] text-center translate-x-[140px] translate-y-[40px]">
            FIM
          </span>
          <span className="text-[35px] text-[#acacac] text-end mr-2">
            VOTOU
          </span>
          <audio autoPlay src="/assets/audios/vote-completion-sound.mp3" />
        </div>
      )}
    </>
  );
};
