import { PoliticalJob } from "../labels/PoliticalJobLabel";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const BlankVote = (): JSX.Element => {
  return (
    <>
      <Header />
      <PoliticalJob />
      <div className="translate-x-[100px] translate-y-[108px]">
        <span className="text-[36px] animate-fast-pulse">VOTO EM BRANCO</span>
      </div>
      <div className="translate-y-[175px]">
        <Footer />
      </div>
    </>
  );
};
