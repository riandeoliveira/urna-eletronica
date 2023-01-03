import { useDispatch, useSelector } from "react-redux";
import {
  clearKeyInput,
  setIsBlankVote,
  setIsCheckingVote,
  setIsNullVote,
  setIsPartyVote,
  setKeyInput,
} from "redux/voting-machine/actions";
import {
  selectCandidateByNumber,
  selectCandidateParty,
  selectVotingMachineStates,
} from "redux/voting-machine/selectors";
import useSound from "use-sound";

interface UseVotingMachine {
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
  const [playConfirmVoteSound] = useSound<string>(
    "/assets/audios/confirm-vote-sound.mp3"
  );
  const { isBlankVote, keyInput, stage, isCheckingVote } = useSelector(
    selectVotingMachineStates
  );
  const candidateFound = useSelector(selectCandidateByNumber);
  const candidatePartyFound = useSelector(selectCandidateParty);

  const handleVoting = (): void => {
    const isAvailableToPartyVote: boolean =
      stage.cargo.tipo === "deputado_federal" ||
      stage.cargo.tipo === "deputado_estadual";

    if (keyInput.length === 2) {
      if (candidatePartyFound && isAvailableToPartyVote) {
        console.log("VOTO DE LEGENDA");
        console.log(candidatePartyFound);
      }

      if (!candidateFound && !candidatePartyFound) {
        console.log("VOTO NULO");
        dispatch(setIsNullVote(true));
      }
    }

    if (keyInput.length === stage.campo_digitos.length) {
      if (candidateFound) {
        console.log("CANDIDATO ENCONTRADO");
        console.log(candidateFound);
      }

      if (!candidateFound && candidatePartyFound && isAvailableToPartyVote) {
        console.log("CANDIDATO INEXISTENTE");
        console.log(candidatePartyFound);

        dispatch(setIsPartyVote(true));
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

    if (!isBlankVote && keyInput.length !== stage.campo_digitos.length) {
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
    dispatch(setIsBlankVote(false));
    dispatch(setIsPartyVote(false));
    dispatch(setIsNullVote(false));
  };

  const onConfirmButtonPress = (): void => {
    playKeyPressSound();

    if (isBlankVote && !isCheckingVote) {
      playConfirmVoteSound();
    }
  };

  return {
    handleVoting,
    onBlankButtonPress,
    onConfirmButtonPress,
    onCorrectsButtonPress,
    onKeyButtonPress,
  };
};
