import { useVotingMachine } from "hooks/useVotingMachine";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

export const PoliticalOffice = (): JSX.Element => {
  const { stage, currentCandidate } = useSelector(selectVotingMachineStates);
  const { handleVoting } = useVotingMachine();

  useEffect(() => {
    handleVoting();
  });

  return (
    <span className="text-[22px] tracking-[1.5px]">
      {currentCandidate.sexo === "F"
        ? stage.cargo.nome_feminino
        : stage.cargo.nome_masculino}
    </span>
  );
};
