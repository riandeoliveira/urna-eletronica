import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";
import { PoliticalJobLabel } from "../labels/PoliticalJobLabel";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { NumberLabel } from "../labels/NumberLabel";
import { PartyLabel } from "../labels/PartyLabel";
import { CandidateNotFound } from "../party-vote/CandidateNotFound";

export const PartyVote = (): JSX.Element => {
  const { keyInput, stage } = useSelector(selectVotingMachineStates);

  return (
    <>
      <Header />
      <PoliticalJobLabel />
      <NumberLabel />
      <CandidateNotFound />
      <PartyLabel />
      {keyInput.length === stage.campo_digitos.length && (
        <div className="absolute translate-x-[100px] translate-y-[163px]">
          <span className="text-[34px] tracking-[0.5px] animate-fast-pulse">
            VOTO DE LEGENDA
          </span>
        </div>
      )}
      <div className="translate-y-[196px]">
        <Footer />
      </div>
    </>
  );
};
