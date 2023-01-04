import { Footer } from "../Footer";
import { Header } from "../Header";
import { CandidateJob } from "../labels/CandidateJob";
import { CandidateNumber } from "../labels/CandidateNumber";
import { NullVote } from "../labels/NullVote";
import { WrongNumber } from "../labels/WrongNumber";

export const NullVoteStage = (): JSX.Element => {
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
