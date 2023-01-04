import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

export const CandidateNotFound = (): JSX.Element => {
  const { keyInput, stage } = useSelector(selectVotingMachineStates);

  return (
    <>
      {keyInput.length === stage.campo_digitos.length && (
        <span className="absolute translate-x-[3px] translate-y-[147px] text-[20px] tracking-[0.5px]">
          CANDIDATO INEXISTENTE
        </span>
      )}
    </>
  );
};
