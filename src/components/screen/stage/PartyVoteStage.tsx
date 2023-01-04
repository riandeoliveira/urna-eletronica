import { Footer } from "../Footer";
import { Header } from "../Header";
import { CandidateJob } from "../labels/CandidateJob";
import { CandidateNotFound } from "../labels/CandidateNotFound";
import { CandidateNumber } from "../labels/CandidateNumber";
import { CandidateParty } from "../labels/CandidateParty";
import { PartyVote } from "../labels/PartyVote";

export const PartyVoteStage = (): JSX.Element => {
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
