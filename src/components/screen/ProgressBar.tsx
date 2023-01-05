interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps): JSX.Element => {
  return (
    <div className="flex flex-col text-center translate-y-8">
      <div className="h-[18px] w-[440px] text-[10px] flex justify-center items-center"></div>
      <div
        className="h-[18px] border border-[black] bg-[#008001] absolute"
        style={{ width: `${progress}%` }}
      ></div>
      <span className="pt-2 text-[20px] font-semibold tracking-[1px]">
        Gravando
      </span>
    </div>
  );
};
