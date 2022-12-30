import { ConfirmButton } from "./ConfirmButton";
import { CorrectsButton } from "./CorrectsButton";
import { DigitButton } from "./DigitButton";
import { WhiteButton } from "./WhiteButton";

export const Keyboard = (): JSX.Element => {
  return (
    <div className="flex gap-[22px] font-primary font-semibold">
      <div className="flex flex-col gap-[11px]">
        <div className="grid grid-cols-3 gap-x-[15px] gap-y-[11px]">
          <DigitButton>1</DigitButton>
          <DigitButton>2</DigitButton>
          <DigitButton>3</DigitButton>
          <DigitButton>4</DigitButton>
          <DigitButton>5</DigitButton>
          <DigitButton>6</DigitButton>
          <DigitButton>7</DigitButton>
          <DigitButton>8</DigitButton>
          <DigitButton>9</DigitButton>
        </div>
        <div className="flex justify-center">
          <DigitButton>0</DigitButton>
        </div>
      </div>
      <div className="flex flex-col gap-[11px] text-[14px]">
        <WhiteButton />
        <CorrectsButton />
        <ConfirmButton />
      </div>
    </div>
  );
};
