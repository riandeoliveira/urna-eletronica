import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

export const CandidateNumber = (): JSX.Element => {
  const { stage, keyInput, isNullVote, isPartyVote } = useSelector(
    selectVotingMachineStates
  );

  return (
    <>
      {isNullVote || isPartyVote || keyInput.length === stage.campo_digitos.length ? (
        <span
          className={`absolute text-[15px] translate-x-[3px] ${
            stage.cargo.tipo === "senador"
              ? "translate-y-[76px]"
              : "translate-y-[100px]"
          }`}
        >
          Número:
        </span>
      ) : (
        <></>
      )}
      <div
        className={`absolute flex gap-[1px] translate-x-[75px] ${
          stage.cargo.tipo === "senador"
            ? "translate-y-[70px]"
            : "translate-y-[94px]"
        }`}
      >
        {stage.campo_digitos.map((_item, index) => (
          <div
            className={`w-[28px] h-[33px] border border-solid border-[#666666] text-[25px] flex justify-center items-center ${
              index === keyInput.length && "animate-fade-pulse"
            }`}
            key={index}
          >
            {keyInput[index]}
          </div>
        ))}
      </div>
    </>
  );
};
