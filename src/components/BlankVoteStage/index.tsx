import type { ReactElement } from "react";
import { BlankVote } from "../BlankVote";
import { CandidateJob } from "../CandidateJob";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const BlankVoteStage = (): ReactElement => {
  return (
    <>
      <Header />
      <CandidateJob />
      <BlankVote />
      <Footer />
    </>
  );
};
