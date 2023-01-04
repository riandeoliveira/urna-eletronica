import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

export const CandidateNumber = (): JSX.Element => {
  const { stage, keyInput, isNullVote, isPartyVote } = useSelector(
    selectVotingMachineStates
  );

  const getNumberLabelPosition = (): string => {
    if (stage.cargo.tipo === "senador") {
      return "translate-y-[76px]";
    }

    if (
      stage.cargo.tipo === "governador" ||
      stage.cargo.tipo === "presidente"
    ) {
      return "translate-y-[82px]";
    }

    return "translate-y-[100px]";
  };

  const getKeyInputPosition = (): string => {
    if (stage.cargo.tipo === "senador") {
      return "translate-y-[70px]";
    }

    if (
      stage.cargo.tipo === "governador" ||
      stage.cargo.tipo === "presidente"
    ) {
      return "translate-y-[75px]";
    }

    return "translate-y-[94px]";
  };

  return (
    <>
      {isNullVote ||
      isPartyVote ||
      keyInput.length === stage.campo_digitos.length ? (
        <span
          className={`absolute text-[15px] translate-x-[3px] ${getNumberLabelPosition()}`}
        >
          Número:
        </span>
      ) : (
        <></>
      )}
      <div
        className={`absolute flex gap-[1px] translate-x-[75px] ${getKeyInputPosition()}`}
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
