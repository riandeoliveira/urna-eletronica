import { useDispatch, useSelector } from "react-redux";
import {
  clearKeyInput,
  setCurrentCandidate,
  setIsBlankVote,
  setIsCheckingVote,
  setIsFinishedVote,
  setIsNullVote,
  setIsPartyVote,
  setKeyInput,
  setStage,
} from "redux/voting-machine/actions";
import {
  selectCandidateByNumber,
  selectCandidateParty,
  selectVotingMachineStates,
} from "redux/voting-machine/selectors";
import type { Candidato } from "types/candidato";
import useSound from "use-sound";

interface UseVotingMachine {
  handleVoteChecking: () => void;
  handleVoting: () => void;
  onBlankButtonPress: () => void;
  onConfirmButtonPress: () => void;
  onCorrectsButtonPress: () => void;
  onKeyButtonPress: (keyPress: string) => void;
}

export const useVotingMachine = (): UseVotingMachine => {
  const dispatch = useDispatch();
  const [playKeyPressSound] = useSound<string>(
    "/assets/audios/key-press-sound.mp3"
  );
  const [playVoteConfirmationSound] = useSound<string>(
    "/assets/audios/vote-confirmation-sound.mp3"
  );
  const {
    isBlankVote,
    keyInput,
    stage,
    isCheckingVote,
    isPartyVote,
    isNullVote,
    isFinishedVote,
  } = useSelector(selectVotingMachineStates);
  const candidateFound = useSelector(selectCandidateByNumber);
  const candidatePartyFound = useSelector(selectCandidateParty);

  const handleFinishVoting = (): void => {
    dispatch(setIsFinishedVote(true));
  };

  const handleVoting = (): void => {
    const isAvailableToPartyVote: boolean =
      stage.cargo.tipo === "deputado_federal" ||
      stage.cargo.tipo === "deputado_estadual";

    if (
      !isAvailableToPartyVote &&
      keyInput.length === stage.campo_digitos.length &&
      !candidateFound
    ) {
      dispatch(setIsNullVote(true));
    }

    if (keyInput.length === 2 && isAvailableToPartyVote) {
      if (candidatePartyFound) {
        dispatch(setIsPartyVote(true));
      }

      if (!candidateFound && !candidatePartyFound) {
        dispatch(setIsNullVote(true));
      }

      if (!candidateFound && candidatePartyFound) {
        dispatch(setIsPartyVote(true));
      }
    }

    if (keyInput.length === stage.campo_digitos.length) {
      if (candidateFound) {
        dispatch(setCurrentCandidate(candidateFound as Candidato));
      }
    }
  };

  const handleVoteChecking = (): void => {
    const MILLISECONDS: number = 1000;

    dispatch(setIsCheckingVote(true));

    setTimeout(() => dispatch(setIsCheckingVote(false)), MILLISECONDS);
  };

  const onKeyButtonPress = (keyPress: string): void => {
    playKeyPressSound();

    if (
      !isBlankVote &&
      keyInput.length !== stage.campo_digitos.length &&
      !isFinishedVote
    ) {
      dispatch(setKeyInput(keyPress));
    }
  };

  const onBlankButtonPress = (): void => {
    playKeyPressSound();

    if (keyInput.length === 0) {
      dispatch(setIsBlankVote(true));

      handleVoteChecking();
    }
  };

  const onCorrectsButtonPress = (): void => {
    playKeyPressSound();

    dispatch(clearKeyInput());
    dispatch(setCurrentCandidate({} as Candidato));
    dispatch(setIsBlankVote(false));
    dispatch(setIsCheckingVote(false));
    dispatch(setIsNullVote(false));
    dispatch(setIsPartyVote(false));
  };

  const onConfirmButtonPress = (): void => {
    if (keyInput.length === stage.campo_digitos.length && !isCheckingVote) {
      playVoteConfirmationSound();

      if (stage.cargo.tipo === "presidente") {
        handleFinishVoting();
      } else dispatch(setStage());
    } else if (isPartyVote && keyInput.length >= 2 && !isCheckingVote) {
      playVoteConfirmationSound();

      if (stage.cargo.tipo === "presidente") {
        handleFinishVoting();
      } else dispatch(setStage());
    } else if (isBlankVote && !isCheckingVote) {
      playVoteConfirmationSound();

      if (stage.cargo.tipo === "presidente") {
        handleFinishVoting();
      } else dispatch(setStage());
    } else if (isNullVote && !isCheckingVote) {
      playVoteConfirmationSound();

      if (stage.cargo.tipo === "presidente") {
        handleFinishVoting();
      } else dispatch(setStage());
    } else playKeyPressSound();
  };

  return {
    handleVoteChecking,
    handleVoting,
    onBlankButtonPress,
    onConfirmButtonPress,
    onCorrectsButtonPress,
    onKeyButtonPress,
  };
};
