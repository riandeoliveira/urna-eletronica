import { BlankVote } from "../labels/BlankVote";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { CandidateJob } from "../labels/CandidateJob";

export const BlankVoteStage = (): JSX.Element => {
  return (
    <>
      <Header />
      <CandidateJob />
      <BlankVote />
      <Footer />
    </>
  );
};
