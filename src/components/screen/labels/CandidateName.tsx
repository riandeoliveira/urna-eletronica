import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

export const CandidateName = (): JSX.Element => {
  const { currentCandidate, stage } = useSelector(selectVotingMachineStates);

  return (
    <div
      className={`translate-x-[3px] absolute flex ${
        stage.cargo.tipo === "senador"
          ? "translate-y-[110px]"
          : "translate-y-[140px]"
      }`}
    >
      <span className="text-[15px]">Nome:</span>
      <div className="translate-x-[27px]">
        <span>{currentCandidate.nome}</span>
      </div>
    </div>
  );
};
