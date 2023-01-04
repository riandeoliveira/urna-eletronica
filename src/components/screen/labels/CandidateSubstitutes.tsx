import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

export const CandidateSubstitutes = (): JSX.Element => {
  const { currentCandidate } = useSelector(selectVotingMachineStates);

  return (
    <div className="absolute translate-x-[3px] flex flex-col translate-y-[180px]">
      <div className="flex gap-[16px]">
        <span className="text-[14px]">1º Suplente:</span>
        <div>
          <span>{currentCandidate.suplentes[0].nome}</span>
        </div>
      </div>
      <div className="flex gap-[16px]">
        <span className="text-[14px]">2º Suplente:</span>
        <div>
          <span>{currentCandidate.suplentes[1].nome}</span>
        </div>
      </div>
    </div>
  );
};
