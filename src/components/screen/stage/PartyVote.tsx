import { PoliticalOffice } from "../candidate/PoliticalOffice";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { KeyInput } from "../KeyInput";

export const PartyVote = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="translate-x-[85px] translate-y-[43px]">
        <PoliticalOffice />
      </div>
      <div className="translate-x-[75px] translate-y-[76px]">
        <KeyInput />
      </div>
      <span className="absolute text-[15px] translate-x-[3px] translate-y-[81px]">
        Número:
      </span>
      <div className="absolute translate-x-[3px] translate-y-[114px]">
        <span className="text-[20px] tracking-[0.5px]">
          CANDIDATO INEXISTENTE
        </span>
      </div>
      <div className="absolute translate-x-[3px] translate-y-[146px] flex">
        <span className="text-[14px]">Partido:</span>
        <div className="translate-x-[23px]">
          <span>PFest</span>
        </div>
      </div>
      <div className="absolute translate-x-[100px] translate-y-[163px]">
        <span className="text-[34px] tracking-[0.5px] animate-fast-pulse">
          VOTO DE LEGENDA
        </span>
      </div>
      <div className="translate-y-[196px]">
        <Footer />
      </div>
    </>
  );
};
