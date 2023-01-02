import { BlankButton } from "./BlankButton";
import { ConfirmButton } from "./ConfirmButton";
import { CorrectsButton } from "./CorrectsButton";
import { KeyButton } from "./KeyButton";

export const Keyboard = (): JSX.Element => {
  return (
    <div className="flex gap-[22px] font-primary font-semibold">
      <div className="flex flex-col gap-[11px]">
        <div className="grid grid-cols-3 gap-x-[15px] gap-y-[11px]">
          <KeyButton keyPress="1" />
          <KeyButton keyPress="2" />
          <KeyButton keyPress="3" />
          <KeyButton keyPress="4" />
          <KeyButton keyPress="5" />
          <KeyButton keyPress="6" />
          <KeyButton keyPress="7" />
          <KeyButton keyPress="8" />
          <KeyButton keyPress="9" />
        </div>
        <div className="flex justify-center">
          <KeyButton keyPress="0" />
        </div>
      </div>
      <div className="flex flex-col gap-[11px] text-[14px]">
        <BlankButton />
        <CorrectsButton />
        <ConfirmButton />
      </div>
    </div>
  );
};
