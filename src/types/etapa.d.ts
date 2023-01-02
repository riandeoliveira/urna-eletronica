type CargoTipo =
  | "deputado_estadual"
  | "deputado_federal"
  | "governador"
  | "presidente"
  | "senador";

interface NomeTipo {
  nome_masculino: string;
  nome_feminino: string;
  tipo: CargoTipo;
}

export interface Etapa {
  cargo: NomeTipo;
  campo_digitos: string[];
  libras: string;
}
