import useSound from "use-sound";

interface UseVotingMachine {
  onButtonPress: () => void;
}

export const useVotingMachine = (): UseVotingMachine => {
  const [playSound] = useSound<string>("/assets/audios/key-press-sound.mp3");

  const onButtonPress = (): void => playSound();

  return {
    onButtonPress,
  };
};
