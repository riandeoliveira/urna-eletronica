import type { ReactElement } from "react";
import { CandidateJob } from "../CandidateJob";
import { Footer } from "../Footer";
import { Header } from "../Header";
import styles from "./styles.module.scss";

export const BlankVoteStage = (): ReactElement => {
  return (
    <>
      <Header />
      <CandidateJob />
      <span className={styles.label} data-test-id="blank-vote-label">
        VOTO EM BRANCO
      </span>
      <Footer />
    </>
  );
};
