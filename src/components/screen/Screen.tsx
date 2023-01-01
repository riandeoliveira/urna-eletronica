import { ImageArea } from "./candidate/ImageArea";
import { InfoArea } from "./candidate/InfoArea";
import { Footer } from "./Footer";

export const Screen = (): JSX.Element => {
  return (
    <div className="bg-black w-[609px] h-[336px] pt-[20.86px] pr-[37px] pb-[19.7px] pl-9">
      <div className="w-[536px] h-[295.45px] bg-white font-screen">
        <InfoArea />
        <ImageArea />
        <Footer />
      </div>
    </div>
  );
};
