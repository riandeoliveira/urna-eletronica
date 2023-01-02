import { useDispatch } from "react-redux";
import {
  clearKeyInput,
  setIsBlankVote,
  setIsCheckingVote,
  setKeyInput,
} from "redux/voting-machine/actions";
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

  const handleVoteChecking = (): void => {
    const MILLISECONDS: number = 1000;

    dispatch(setIsCheckingVote(true));

    setTimeout(() => dispatch(setIsCheckingVote(false)), MILLISECONDS);
  };

  const onKeyButtonPress = (keyPress: string): void => {
    playKeyPressSound();

    dispatch(setKeyInput(keyPress));
  };

  const onBlankButtonPress = (): void => {
    playKeyPressSound();

    dispatch(setIsBlankVote(true));

    handleVoteChecking();
  };

  const onCorrectsButtonPress = (): void => {
    playKeyPressSound();

    dispatch(clearKeyInput());
    dispatch(setIsBlankVote(false));
  };

  const onConfirmButtonPress = (): void => {
    playKeyPressSound();
  };

  return {
    onBlankButtonPress,
    onConfirmButtonPress,
    onCorrectsButtonPress,
    onKeyButtonPress,
  };
};
