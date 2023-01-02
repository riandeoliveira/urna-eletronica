import { useVotingMachine } from "hooks/useVotingMachine";

interface KeyButtonProps {
  keyPress: string;
}

export const KeyButton = ({ keyPress }: KeyButtonProps): JSX.Element => {
  const { onKeyButtonPress } = useVotingMachine();

  return (
    <button
      type="button"
      onClick={() => onKeyButtonPress(keyPress)}
      className="w-[55px] h-[35px] bg-[#262626] rounded-md text-white shadow-digit-btn active:shadow-active-digit-btn transition-all flex pl-[3px] text-[20px] active:pl-[6px] active:pt-[2px] duration-100"
    >
      {keyPress}
    </button>
  );
};
