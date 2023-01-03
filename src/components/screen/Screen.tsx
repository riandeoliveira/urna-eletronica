import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";
import { BlankVote } from "./stage/BlankVote";
import { CandidateProfile } from "./stage/CandidateProfile";
import { NullVote } from "./stage/NullVote";
import { PartyVote } from "./stage/PartyVote";
import { Stage } from "./stage/Stage";

export const Screen = (): JSX.Element => {
  const { isBlankVote, isNullVote, isPartyVote, currentCandidate } =
    useSelector(selectVotingMachineStates);

  const renderStages = (): JSX.Element => {
    if (currentCandidate.nome) return <CandidateProfile />;
    if (isBlankVote) return <BlankVote />;
    if (isNullVote) return <NullVote />;
    if (isPartyVote) return <PartyVote />;

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
