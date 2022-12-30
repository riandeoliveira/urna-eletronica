import type { ReactNode } from "react";

interface DigitButtonProps {
  children: ReactNode;
}

export const DigitButton = ({ children }: DigitButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className="w-[55px] h-[35px] bg-[#262626] rounded-md text-white shadow-digit-btn active:shadow-active-digit-btn transition-all flex pl-[3px] text-[20px] active:pl-[6px] active:pt-[2px] duration-100"
    >
      {children}
    </button>
  );
};
