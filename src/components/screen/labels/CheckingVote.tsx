import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

export const CheckingVote = (): JSX.Element => {
  const { stage, isBlankVote, isNullVote } = useSelector(
    selectVotingMachineStates
  );

  return (
    <span
      className={`absolute text-[28px] animate-fast-pulse translate-y-[14px] ${
        stage.cargo.tipo === "senador" && !isBlankVote && !isNullVote
          ? "translate-x-[20px]"
          : "translate-x-[114px]"
      }`}
    >
      CONFIRA O SEU VOTO
    </span>
  );
};
