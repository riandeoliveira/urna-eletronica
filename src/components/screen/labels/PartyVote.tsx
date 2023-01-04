import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

export const PartyVote = (): JSX.Element => {
  const { keyInput, stage } = useSelector(selectVotingMachineStates);

  return (
    <>
      {keyInput.length === stage.campo_digitos.length && (
        <span className="absolute translate-x-[100px] translate-y-[196px] text-[34px] tracking-[0.5px] animate-fast-pulse">
          VOTO DE LEGENDA
        </span>
      )}
    </>
  );
};
