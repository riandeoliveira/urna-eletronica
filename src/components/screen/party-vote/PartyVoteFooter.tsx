import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

export const PartyVoteFooter = (): JSX.Element => {
  const { isPartyVote, currentCandidate } = useSelector(
    selectVotingMachineStates
  );

  const isAvailableToPartyVote: boolean = isPartyVote && !currentCandidate.nome;

  return (
    <>
      {isAvailableToPartyVote && (
        <span className="text-[13px] absolute top-[42%] right-[10px] animate-fast-pulse">
          (voto de legenda)
        </span>
      )}
    </>
  );
};
