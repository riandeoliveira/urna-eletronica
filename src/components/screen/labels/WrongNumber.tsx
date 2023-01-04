import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

export const WrongNumber = (): JSX.Element => {
  const { stage } = useSelector(selectVotingMachineStates);

  const isAvailableToPartyVote: boolean =
    stage.cargo.tipo === "deputado_federal" ||
    stage.cargo.tipo === "deputado_estadual";

  return (
    <span
      className={`absolute text-[20px] tracking-[0.5px] translate-x-[3px] ${
        isAvailableToPartyVote ? "translate-y-[150px]" : "translate-y-[110px]"
      }`}
    >
      NÚMERO ERRADO
    </span>
  );
};
