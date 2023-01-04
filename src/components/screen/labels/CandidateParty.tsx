import { useSelector } from "react-redux";
import {
  selectCandidateParty,
  selectVotingMachineStates,
} from "redux/voting-machine/selectors";

export const CandidateParty = (): JSX.Element => {
  const { stage } = useSelector(selectVotingMachineStates);
  const candidatePartyFound = useSelector(selectCandidateParty);

  const isAvailableToPartyVote: boolean =
    stage.cargo.tipo === "deputado_federal" ||
    stage.cargo.tipo === "deputado_estadual";

  return (
    <div
      className={`absolute flex translate-x-[3px] ${
        isAvailableToPartyVote ? "translate-y-[175px]" : "translate-y-[150px]"
      }`}
    >
      <span className="text-[14px]">Partido:</span>
      <div className="translate-x-[23px]">
        <span>{candidatePartyFound?.nome}</span>
      </div>
    </div>
  );
};
