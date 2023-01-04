import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { CandidateJob } from "../labels/CandidateJob";
import { CandidateNotFound } from "../labels/CandidateNotFound";
import { CandidateNumber } from "../labels/CandidateNumber";
import { CandidateParty } from "../labels/CandidateParty";

export const PartyVoteStage = (): JSX.Element => {
  const { keyInput, stage } = useSelector(selectVotingMachineStates);

  return (
    <>
      <Header />
      <CandidateJob />
      <CandidateNumber />
      <CandidateNotFound />
      <CandidateParty />
      {keyInput.length === stage.campo_digitos.length && (
        <div className="absolute translate-x-[100px] translate-y-[163px]">
          <span className="text-[34px] tracking-[0.5px] animate-fast-pulse">
            VOTO DE LEGENDA
          </span>
        </div>
      )}
      <Footer />
    </>
  );
};
