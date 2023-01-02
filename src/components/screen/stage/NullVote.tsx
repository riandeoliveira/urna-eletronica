import { PoliticalOffice } from "../candidate/PoliticalOffice";
import { KeyInput } from "../KeyInput";

export const NullVote = (): JSX.Element => {
  return (
    <>
      <div className="translate-x-[85px] translate-y-[43px]">
        <PoliticalOffice />
      </div>
      <div className="translate-x-[75px] translate-y-[76px]">
        <KeyInput />
      </div>
      <span className="absolute text-[15px] translate-x-[3px] translate-y-[48px]">
        Número:
      </span>
    </>
  );
};
