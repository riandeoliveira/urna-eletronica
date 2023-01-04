import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

export const WrongNumber = (): JSX.Element => {
  const { stage } = useSelector(selectVotingMachineStates);

  return (
    <span
      className={`absolute text-[20px] tracking-[0.5px] translate-x-[3px] ${
        stage.cargo.tipo === "senador"
          ? "translate-y-[110px]"
          : "translate-y-[150px]"
      }`}
    >
      NÚMERO ERRADO
    </span>
  );
};
