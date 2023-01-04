import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

export const CandidateName = (): JSX.Element => {
  const { currentCandidate, stage } = useSelector(selectVotingMachineStates);

  const getNamePosition = (): string => {
    if (stage.cargo.tipo === "senador") {
      return "translate-y-[110px]";
    }

    if (
      stage.cargo.tipo === "governador" ||
      stage.cargo.tipo === "presidente"
    ) {
      return "translate-y-[120px]";
    }

    return "translate-y-[140px]";
  };

  return (
    <div className={`translate-x-[3px] absolute flex ${getNamePosition()}`}>
      <span className="text-[15px]">Nome:</span>
      <div className="translate-x-[27px]">
        <span>{currentCandidate.nome}</span>
      </div>
    </div>
  );
};
