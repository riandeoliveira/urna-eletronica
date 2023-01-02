import { useSelector } from "react-redux";
import type { RootState } from "types/redux";

export const PoliticalOffice = (): JSX.Element => {
  const { stage, currentCandidate } = useSelector(
    (state: RootState) => state.votingMachine
  );

  return (
    <span className="text-[22px] tracking-[1.5px]">
      {currentCandidate.sexo === "F"
        ? stage.cargo.nome_feminino
        : stage.cargo.nome_masculino}
    </span>
  );
};
