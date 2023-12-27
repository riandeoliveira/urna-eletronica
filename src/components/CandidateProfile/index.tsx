import { CandidateImageArea } from "components/CandidateImageArea";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import { CandidateJob } from "../CandidateJob";
import { CandidateNumber } from "../CandidateNumber";
import { CandidateParty } from "../CandidateParty";
import { CandidateSubstitutes } from "../CandidateSubstitutes";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { ViceGovernor } from "../ViceGovernor";
import { VicePresident } from "../VicePresident";
import styles from "./styles.module.scss";

export const CandidateProfile = observer((): ReactElement => {
  const { stage, currentCandidate } = votingMachineStore;

  return (
    <>
      <Header />
      <CandidateJob />
      <CandidateNumber />
      <div className={styles.candidate_name_area} data-name-position={stage.cargo.tipo}>
        <span className={styles.label}>Nome:</span>
        <div className={styles.name_container}>
          <span className={styles.name}>{currentCandidate.nome}</span>
        </div>
      </div>
      <CandidateParty />
      {stage.cargo.tipo === "governador" && <ViceGovernor />}
      {stage.cargo.tipo === "senador" && <CandidateSubstitutes />}
      {stage.cargo.tipo === "presidente" && <VicePresident />}
      <CandidateImageArea />
      <Footer />
    </>
  );
});
