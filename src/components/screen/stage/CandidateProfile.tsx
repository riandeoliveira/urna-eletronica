import { CandidateImageArea } from "components/screen/CandidateImageArea";
import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { CandidateJob } from "../labels/CandidateJob";
import { CandidateName } from "../labels/CandidateName";
import { CandidateNumber } from "../labels/CandidateNumber";
import { CandidateParty } from "../labels/CandidateParty";
import { Substitutes } from "../labels/Substitutes";

export const CandidateProfile = (): JSX.Element => {
  const { stage } = useSelector(selectVotingMachineStates);

  return (
    <>
      <Header />
      <CandidateJob />
      <CandidateNumber />
      <CandidateName />
      <CandidateParty />
      {stage.cargo.tipo === "senador" && <Substitutes />}
      <CandidateImageArea />
      <Footer />
    </>
  );
};
