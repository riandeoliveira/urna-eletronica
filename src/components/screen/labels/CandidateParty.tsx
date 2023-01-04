import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

export const CandidateParty = (): JSX.Element => {
  const { stage } = useSelector(selectVotingMachineStates);

  return (
    <div
      className={`absolute flex translate-x-[3px] ${
        stage.cargo.tipo === "senador"
          ? "translate-y-[150px]"
          : "translate-y-[175px]"
      }`}
    >
      <span className="text-[14px]">Partido:</span>
      <div className="translate-x-[23px]">
        <span>PFest</span>
      </div>
    </div>
  );
};
