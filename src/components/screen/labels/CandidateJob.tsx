import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

export const CandidateJob = (): JSX.Element => {
  const { stage, currentCandidate } = useSelector(selectVotingMachineStates);

  const getJobPosition = (): string => {
    if (stage.cargo.tipo === "senador") {
      return "translate-x-[140px]";
    }

    if (
      stage.cargo.tipo === "governador" ||
      stage.cargo.tipo === "presidente"
    ) {
      return "translate-x-[125px]";
    }

    return "translate-x-[85px]";
  };

  return (
    <span
      className={`absolute translate-y-[30px] text-[22px] tracking-[1.5px] ${getJobPosition()}`}
    >
      {currentCandidate.sexo === "F"
        ? stage.cargo.nome_feminino
        : stage.cargo.nome_masculino}
    </span>
  );
};
