import Image from "next/image";
import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";
import { PoliticalOffice } from "../candidate/PoliticalOffice";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { KeyInput } from "../KeyInput";

export const CandidateProfile = (): JSX.Element => {
  const { currentCandidate } = useSelector(selectVotingMachineStates);

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
      <div className="translate-x-[3px] translate-y-[118px] absolute flex">
        <span className="text-[15px]">Nome:</span>
        <div className="translate-x-[23px]">
          <span>{currentCandidate.nome}</span>
        </div>
      </div>
      <div className="absolute translate-x-[3px] translate-y-[146px] flex">
        <span className="text-[14px]">Partido:</span>
        <div className="translate-x-[23px]">
          <span>PFest</span>
        </div>
      </div>
      <div className="w-fit text-center absolute translate-x-[446px] translate-y-[-33px]">
        <Image
          src={`https://www.tse.jus.br/hotsites/simulador-de-votacao/image/figuras/135x145/24bpp/${currentCandidate.foto}.jpg`}
          alt="Imagem do candidato selecionado"
          width={90}
          height={145}
        />
      </div>
      <div className="translate-y-[196px]">
        <Footer />
      </div>
    </>
  );
};
