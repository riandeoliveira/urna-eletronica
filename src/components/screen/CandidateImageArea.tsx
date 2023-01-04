import { useSelector } from "react-redux";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";
import { CandidatePrimaryImage } from "./CandidatePrimaryImage";
import { CandidateSecondaryImage } from "./CandidateSecondaryImage";

export const CandidateImageArea = (): JSX.Element => {
  const { stage, currentCandidate } = useSelector(selectVotingMachineStates);

  return (
    <>
      <CandidatePrimaryImage />
      {stage.cargo.tipo === "senador" && (
        <>
          <div className="translate-x-[-80px] absolute w-full z-50">
            <CandidateSecondaryImage
              candidateJob="1º Suplente"
              candidateImage={currentCandidate.suplentes[0].foto}
            />
          </div>
          <CandidateSecondaryImage
            candidateJob="2º Suplente"
            candidateImage={currentCandidate.suplentes[1].foto}
          />
        </>
      )}
      {stage.cargo.tipo === "governador" && (
        <CandidateSecondaryImage
          candidateJob="Vice-Governador"
          candidateImage={currentCandidate.vice.foto}
        />
      )}
      {stage.cargo.tipo === "presidente" && (
        <CandidateSecondaryImage
          candidateJob="Vice-Presidente"
          candidateImage={currentCandidate.vice.foto}
        />
      )}
    </>
  );
};
