import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

export const NullVote = (): JSX.Element => {
  const { stage } = useSelector(selectVotingMachineStates);

  return (
    <span
      className={`absolute text-[36px] tracking-[0.5px] animate-fast-pulse translate-x-[160px] ${
        stage.cargo.tipo === "senador"
          ? "translate-y-[170px]"
          : "translate-y-[184px]"
      }`}
    >
      VOTO NULO
    </span>
  );
};
