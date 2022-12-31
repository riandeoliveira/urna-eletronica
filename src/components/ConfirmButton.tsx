import { useVotingMachine } from "hooks/useVotingMachine";

export const ConfirmButton = (): JSX.Element => {
  const { onButtonPress } = useVotingMachine();

  return (
    <button
      type="button"
      onClick={onButtonPress}
      className="w-[94px] h-[80px] bg-[#2EB72B] text-[#262626] rounded-md shadow-confirm-btn active:shadow-active-confirm-btn transition-all duration-100 flex pl-[3px] active:pl-[6px] active:pt-[2px]"
    >
      CONFIRMA
    </button>
  );
};
