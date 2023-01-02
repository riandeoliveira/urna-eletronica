import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

export const PoliticalOffice = (): JSX.Element => {
  const { stage, currentCandidate } = useSelector(selectVotingMachineStates);

  return (
    <span className="text-[22px] tracking-[1.5px]">
      {currentCandidate.sexo === "F"
        ? stage.cargo.nome_feminino
        : stage.cargo.nome_masculino}
    </span>
  );
};
