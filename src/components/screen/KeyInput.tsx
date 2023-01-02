import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";

export const KeyInput = (): JSX.Element => {
  const { stage, keyInput } = useSelector(selectVotingMachineStates);

  return (
    <>
      <div className="absolute flex gap-[1px]">
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
