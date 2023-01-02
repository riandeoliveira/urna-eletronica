import { useDispatch, useSelector } from "react-redux";
import {
  clearKeyInput,
  setIsBlankVote,
  setIsCheckingVote,
  setKeyInput,
} from "redux/voting-machine/actions";
import { selectVotingMachineStates } from "redux/voting-machine/selectors";
import useSound from "use-sound";

interface UseVotingMachine {
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
  };

  const onConfirmButtonPress = (): void => {
    playKeyPressSound();

    if (isBlankVote && !isCheckingVote) {
      playConfirmVoteSound();
    }
  };

  return {
    onBlankButtonPress,
    onConfirmButtonPress,
    onCorrectsButtonPress,
    onKeyButtonPress,
  };
};
