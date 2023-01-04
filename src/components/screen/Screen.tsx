import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";
import { BlankVoteStage } from "./stage/BlankVoteStage";
import { CandidateProfile } from "./stage/CandidateProfile";
import { NullVoteStage } from "./stage/NullVoteStage";
import { PartyVoteStage } from "./stage/PartyVoteStage";
import { Stage } from "./stage/Stage";

export const Screen = (): JSX.Element => {
  const { isBlankVote, isNullVote, isPartyVote, currentCandidate } =
    useSelector(selectVotingMachineStates);

  const renderStages = (): JSX.Element => {
    if (currentCandidate.nome) return <CandidateProfile />;
    if (isBlankVote) return <BlankVoteStage />;
    if (isNullVote) return <NullVoteStage />;
    if (isPartyVote) return <PartyVoteStage />;

    return <Stage />;
  };

  return (
    <div className="bg-black w-[609px] h-[336px] pt-[20.86px] pr-[37px] pb-[19.7px] pl-9">
      <div className="w-[536px] h-[295.45px] bg-white font-screen">
        {renderStages()}
      </div>
    </div>
  );
};
