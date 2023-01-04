import Image from "next/image";
import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { CandidateJob } from "../labels/CandidateJob";
import { CandidateName } from "../labels/CandidateName";
import { CandidateNumber } from "../labels/CandidateNumber";
import { CandidateParty } from "../labels/CandidateParty";

export const CandidateProfile = (): JSX.Element => {
  const { currentCandidate } = useSelector(selectVotingMachineStates);

  return (
    <>
      <Header />
      <CandidateJob />
      <CandidateNumber />
      <CandidateName />
      <CandidateParty />
      <div className="w-fit text-center absolute translate-x-[446px]">
        <Image
          src={`https://www.tse.jus.br/hotsites/simulador-de-votacao/image/figuras/135x145/24bpp/${currentCandidate.foto}.jpg`}
          alt="Imagem do candidato selecionado"
          width={90}
          height={145}
        />
      </div>
      <Footer />
    </>
  );
};
