import { useDispatch, useSelector } from "react-redux";
import {
  clearKeyInput,
  setIsBlankVote,
  setIsCheckingVote,
  setKeyInput,
} from "redux/voting-machine/actions";
import type { RootState } from "types/redux";
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
  const { isBlankVote, keyInput } = useSelector(
    (state: RootState) => state.votingMachine
  );

  const handleVoteChecking = (): void => {
    const MILLISECONDS: number = 1000;

    dispatch(setIsCheckingVote(true));

    setTimeout(() => dispatch(setIsCheckingVote(false)), MILLISECONDS);
  };

  const onKeyButtonPress = (keyPress: string): void => {
    playKeyPressSound();

    console.log(keyInput);

    if (!isBlankVote) {
      dispatch(setKeyInput(keyPress));
    }
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
