import type { ReactElement } from "react";
import { CandidateJob } from "../CandidateJob";
import { CandidateNumber } from "../CandidateNumber";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { NullVote } from "../NullVote";
import { WrongNumber } from "../WrongNumber";

export const NullVoteStage = (): ReactElement => {
  return (
    <>
      <Header />
      <CandidateJob />
      <CandidateNumber />
      <WrongNumber />
      <NullVote />
      <Footer />
    </>
  );
};
