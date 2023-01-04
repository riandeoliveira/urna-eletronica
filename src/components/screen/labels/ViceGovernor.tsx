import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

export const ViceGovernor = (): JSX.Element => {
  const { currentCandidate } = useSelector(selectVotingMachineStates);

  return (
    <div className="absolute translate-x-[3px] translate-y-[190px] flex">
      <span className="text-[14px]">Vice-Governador:</span>
      <div className="translate-x-[20px]">
        <span>{currentCandidate.vice.nome}</span>
      </div>
    </div>
  );
};
