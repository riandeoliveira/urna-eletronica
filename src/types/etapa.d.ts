interface NomeTipo {
  nome_masculino: string;
  nome_feminino: string;
  tipo: string;
}

export interface Etapa {
  cargo: NomeTipo;
  campo_digitos: string[];
  libras: string;
}
