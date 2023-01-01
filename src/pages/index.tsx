import { Keyboard } from "components/keyboard/Keyboard";
import { Screen } from "components/screen/Screen";
import type { NextPage } from "next";
import UrnBox from "../../public/assets/images/urn-box.svg";
import UrnBrand from "../../public/assets/images/urn-brand.svg";

const Home: NextPage = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-800">
      <UrnBox />
      <div className="flex flex-col gap-20 absolute translate-x-[-3px] translate-y-[-60px]">
        <Screen />
        <div className="flex gap-[15px] items-end justify-center">
          <UrnBrand />
          <Keyboard />
        </div>
      </div>
    </div>
  );
};

export default Home;
