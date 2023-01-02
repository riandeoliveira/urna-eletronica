import { PoliticalOffice } from "../candidate/PoliticalOffice";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const BlankVote = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="translate-x-[85px] translate-y-[16px]">
        <PoliticalOffice />
      </div>
      <div className="translate-x-[100px] translate-y-[56px]">
        <span className="text-[36px] animate-fast-pulse">VOTO EM BRANCO</span>
      </div>
      <div className="translate-y-[115px]">
        <Footer />
      </div>
    </>
  );
};
