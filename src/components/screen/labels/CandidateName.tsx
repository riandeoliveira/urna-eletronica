import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

export const CandidateName = (): JSX.Element => {
  const { currentCandidate } = useSelector(selectVotingMachineStates);

  return (
    <div className="translate-x-[3px] translate-y-[118px] absolute flex">
      <span className="text-[15px]">Nome:</span>
      <div className="translate-x-[23px]">
        <span>{currentCandidate.nome}</span>
      </div>
    </div>
  );
};
