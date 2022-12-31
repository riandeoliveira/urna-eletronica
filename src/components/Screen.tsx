import { ScreenFooter } from "./ScreenFooter";

export const Screen = (): JSX.Element => {
  return (
    <div className="bg-black w-[609px] h-[336px] pt-[20.86px] pr-[37px] pb-[19.7px] pl-9">
      <div className="w-[536px] h-[295.45px] bg-white flex flex-col justify-end font-screen">
        <ScreenFooter />
      </div>
    </div>
  );
};
