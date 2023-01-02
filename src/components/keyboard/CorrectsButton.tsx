import { useVotingMachine } from "hooks/useVotingMachine";

export const CorrectsButton = (): JSX.Element => {
  const { onCorrectsButtonPress } = useVotingMachine();

  return (
    <button
      type="button"
      onClick={onCorrectsButtonPress}
      className="w-[94px] h-[35px] bg-[#FF5A36] text-[#262626] rounded-md shadow-corrects-btn active:shadow-active-corrects-btn transition-all duration-100 flex pl-[3px] active:pl-[6px] active:pt-[2px]"
    >
      CORRIGE
    </button>
  );
};
