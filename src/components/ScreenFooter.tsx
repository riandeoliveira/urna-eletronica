export const ScreenFooter = (): JSX.Element => {
  return (
    <div className="border-t-2 border-t-black mt-[18px] leading-[16px]">
      <div className="text-[13px] flex flex-col">
        <span className="pl-[6px]">Aperte a tecla:</span>
        <span className="pl-[22px]">CONFIRMA para CONFIRMAR este voto</span>
        <span className="pl-[32px]">CORRIGE para REINICIAR este voto</span>
      </div>
    </div>
  );
};
