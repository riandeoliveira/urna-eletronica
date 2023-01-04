import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

export const CandidateJob = (): JSX.Element => {
  const { stage, currentCandidate } = useSelector(selectVotingMachineStates);

  return (
    <span
      className={`absolute translate-y-[30px] text-[22px] tracking-[1.5px] ${
        stage.cargo.tipo === "senador"
          ? "translate-x-[140px]"
          : "translate-x-[85px]"
      }`}
    >
      {currentCandidate.sexo === "F"
        ? stage.cargo.nome_feminino
        : stage.cargo.nome_masculino}
    </span>
  );
};
