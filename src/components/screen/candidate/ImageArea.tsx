import Image from "next/image";

export const ImageArea = (): JSX.Element => {
  return (
    <>
      <div className="w-fit text-center absolute translate-x-[446px] translate-y-[-235px]">
        <Image
          src="/assets/images/aaa.jpg"
          alt="Imagem do candidato selecionado"
          width={90}
          height={145}
        />
        <span className="text-[14px]">Senadora</span>
      </div>
      <div className="flex gap-1 text-center absolute translate-x-[392px] translate-y-[-86px]">
        <div>
          <Image
            src="/assets/images/bbb.jpg"
            alt="Imagem do candidato selecionado"
            width={70}
            height={105}
          />
          <span className="text-[10px]">1º Suplente</span>
        </div>
        <div>
          <Image
            src="/assets/images/bbb.jpg"
            alt="Imagem do candidato selecionado"
            width={70}
            height={105}
          />
          <span className="text-[10px]">2º Suplente</span>
        </div>
      </div>
    </>
  );
};
