import { PoliticalJob } from "../labels/PoliticalJobLabel";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { NumberLabel } from "../labels/NumberLabel";
import { Abc } from "../null-vote/Abc";
import { WrongNumber } from "../null-vote/WrongNumber";

export const NullVote = (): JSX.Element => {
  return (
    <>
      <Header />
      <PoliticalJob />
      <NumberLabel />
      <WrongNumber />
      <Abc />
      <div className="translate-y-[238px]">
        <Footer />
      </div>
    </>
  );
};
