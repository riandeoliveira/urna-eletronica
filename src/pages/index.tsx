import { Keyboard } from "components/keyboard/Keyboard";
import { Screen } from "components/screen/Screen";
import { useVotingMachine } from "hooks/useVotingMachine";
import type { NextPage } from "next";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";
import VotingMachineBox from "../../public/assets/images/voting-machine-box.svg";
import VotingMachineBrand from "../../public/assets/images/voting-machine-brand.svg";

const Home: NextPage = (): JSX.Element => {
  const { handleVoting, handleVoteChecking } = useVotingMachine();
  const { keyInput, stage } = useSelector(selectVotingMachineStates);

  useEffect(() => {
    handleVoting();

    if (keyInput.length === stage.campo_digitos.length) {
      handleVoteChecking();
    }
  }, [keyInput]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-800">
      <VotingMachineBox />
      <div className="flex flex-col gap-20 absolute translate-x-[-3px] translate-y-[-60px]">
        <Screen />
        <div className="flex gap-[15px] items-end justify-center">
          <VotingMachineBrand />
          <Keyboard />
        </div>
      </div>
    </div>
  );
};

export default Home;
