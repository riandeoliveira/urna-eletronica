import { CandidateImageArea } from "components/CandidateImageArea";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import { CandidateJob } from "../CandidateJob";
import { CandidateName } from "../CandidateName";
import { CandidateNumber } from "../CandidateNumber";
import { CandidateParty } from "../CandidateParty";
import { CandidateSubstitutes } from "../CandidateSubstitutes";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { ViceGovernor } from "../ViceGovernor";
import { VicePresident } from "../VicePresident";

export const CandidateProfile = observer((): ReactElement => {
  const { stage } = votingMachineStore;

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
});
