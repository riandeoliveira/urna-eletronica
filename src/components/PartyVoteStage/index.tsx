import type { ReactElement } from "react";
import { CandidateJob } from "../CandidateJob";
import { CandidateNotFound } from "../CandidateNotFound";
import { CandidateNumber } from "../CandidateNumber";
import { CandidateParty } from "../CandidateParty";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { PartyVote } from "../PartyVote";

export const PartyVoteStage = (): ReactElement => {
  return (
    <>
      <Header />
      <CandidateJob />
      <CandidateNumber />
      <CandidateNotFound />
      <CandidateParty />
      <PartyVote />
      <Footer />
    </>
  );
};
