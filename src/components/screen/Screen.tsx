import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";
import { BlankVote } from "./stage/BlankVote";
import { Stage } from "./stage/Stage";

export const Screen = (): JSX.Element => {
  const { isBlankVote } = useSelector(selectVotingMachineStates);

  return (
    <div className="bg-black w-[609px] h-[336px] pt-[20.86px] pr-[37px] pb-[19.7px] pl-9">
      <div className="w-[536px] h-[295.45px] bg-white font-screen">
        {/* <InfoArea />
        <ImageArea />
        <Footer /> */}
        {isBlankVote ? <BlankVote /> : <Stage />}
      </div>
    </div>
  );
};
