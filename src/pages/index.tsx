import { Keyboard } from "components/keyboard/Keyboard";
import { Screen } from "components/screen/Screen";
import { useVotingMachine } from "hooks/useVotingMachine";
import type { NextPage } from "next";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";
import UrnBox from "../../public/assets/images/urn-box.svg";
import UrnBrand from "../../public/assets/images/urn-brand.svg";

const Home: NextPage = (): JSX.Element => {
  const { handleVoting } = useVotingMachine();
  const { keyInput } = useSelector(selectVotingMachineStates);

  useEffect(() => {
    handleVoting();
  }, [keyInput]);

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
