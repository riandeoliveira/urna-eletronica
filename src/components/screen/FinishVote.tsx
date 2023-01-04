import Image from "next/image";

export const FinishVote = (): JSX.Element => {
  return (
    <>
      <div className="h-full flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <span className="ml-1 text-[15px] tracking-[0.5px]">
            QUA 04/01/2023 18:58:53
          </span>
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
        <span className="text-[35px] text-[#acacac] text-end mr-2">VOTOU</span>
      </div>
    </>
  );
};
