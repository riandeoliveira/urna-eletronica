import { CandidateImageArea } from "components/screen/CandidateImageArea";
import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { CandidateJob } from "../labels/CandidateJob";
import { CandidateName } from "../labels/CandidateName";
import { CandidateNumber } from "../labels/CandidateNumber";
import { CandidateParty } from "../labels/CandidateParty";
import { CandidateSubstitutes } from "../labels/CandidateSubstitutes";
import { ViceGovernor } from "../labels/ViceGovernor";
import { VicePresident } from "../labels/VicePresident";

export const CandidateProfile = (): JSX.Element => {
  const { stage } = useSelector(selectVotingMachineStates);

  return (
    <>
      <Header />
      <CandidateJob />
      <CandidateNumber />
      <CandidateName />
      <CandidateParty />
      {stage.cargo.tipo === "governador" && <ViceGovernor />}
      {stage.cargo.tipo === "senador" && <CandidateSubstitutes />}
      {stage.cargo.tipo === "presidente" && <VicePresident />}
      <CandidateImageArea />
      <Footer />
    </>
  );
};
