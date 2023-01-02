import { PoliticalOffice } from "../candidate/PoliticalOffice";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { KeyInput } from "../KeyInput";

export const NullVote = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="translate-x-[85px] translate-y-[43px]">
        <PoliticalOffice />
      </div>
      <div className="translate-x-[75px] translate-y-[76px]">
        <KeyInput />
      </div>
      <span className="absolute text-[15px] translate-x-[3px] translate-y-[48px]">
        Número:
      </span>
      <div className="translate-x-[3px] translate-y-[90px]">
        <span className="text-[20px] tracking-[0.5px]">NÚMERO ERRADO</span>
      </div>
      <div className="translate-x-[156px] translate-y-[88px]">
        <span className="text-[36px] tracking-[0.5px] animate-fast-pulse">
          VOTO NULO
        </span>
      </div>
      <div className="translate-y-[80px]">
        <Footer />
      </div>
    </>
  );
};
