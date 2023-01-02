import { useDispatch } from "react-redux";
import { setKeyInput } from "redux/voting-machine/actions";
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

  const onKeyButtonPress = (keyPress: string): void => {
    playKeyPressSound();

    dispatch(setKeyInput(keyPress));
  };

  const onBlankButtonPress = (): void => {
    playKeyPressSound();
  };

  const onCorrectsButtonPress = (): void => {
    playKeyPressSound();
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
