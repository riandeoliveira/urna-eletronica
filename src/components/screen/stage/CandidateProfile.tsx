import Image from "next/image";
import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";
import { PoliticalJob } from "../labels/PoliticalJobLabel";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { KeyInput } from "../KeyInput";
import { NameLabel } from "../labels/NameLabel";
import { PartyLabel } from "../labels/PartyLabel";

export const CandidateProfile = (): JSX.Element => {
  const { currentCandidate } = useSelector(selectVotingMachineStates);

  return (
    <>
      <Header />
      <PoliticalJob />
      <div className="translate-x-[75px] translate-y-[76px]">
        <KeyInput />
      </div>
      <span className="absolute text-[15px] translate-x-[3px] translate-y-[81px]">
        Número:
      </span>
      <NameLabel />
      <PartyLabel />
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
