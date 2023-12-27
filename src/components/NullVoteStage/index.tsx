import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { votingMachineStore } from "stores/voting-machine.store";
import { CandidateJob } from "../CandidateJob";
import { CandidateNumber } from "../CandidateNumber";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { WrongNumber } from "../WrongNumber";
import styles from "./styles.module.scss";

export const NullVoteStage = observer((): ReactElement => {
  const { stage } = votingMachineStore;

  return (
    <>
      <Header />
      <CandidateJob />
      <CandidateNumber />
      <WrongNumber />
      <span
        className={styles.label}
        data-position={stage.cargo.tipo === "senador"}
        data-test-id="null-vote-label"
      >
        VOTO NULO
      </span>
      <Footer />
    </>
  );
});
