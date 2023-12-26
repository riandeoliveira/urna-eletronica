import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import { BlankVoteStage } from "../BlankVoteStage";
import { CandidateProfile } from "../CandidateProfile";
import { FinishVote } from "../FinishVote";
import { NullVoteStage } from "../NullVoteStage";
import { PartyVoteStage } from "../PartyVoteStage";
import { Stage } from "../Stage";
import styles from "./styles.module.scss";

export const Screen = observer((): ReactElement => {
  const { isBlankVote, isNullVote, isPartyVote, currentCandidate, isFinishedVote } =
    votingMachineStore;

  const renderStages = (): ReactElement => {
    if (isFinishedVote) return <FinishVote />;
    if (currentCandidate.nome) return <CandidateProfile />;
    if (isBlankVote) return <BlankVoteStage />;
    if (isNullVote) return <NullVoteStage />;
    if (isPartyVote) return <PartyVoteStage />;

    return <Stage />;
  };

  return (
    <div className={styles.screen_area}>
      <div className={styles.screen}>{renderStages()}</div>
    </div>
  );
});
