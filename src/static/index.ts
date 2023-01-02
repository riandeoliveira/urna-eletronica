import deputadosEstaduais from "static/candidatos/deputados-estaduais.json";
import deputadosFederais from "static/candidatos/deputados-federais.json";
import governadores from "static/candidatos/governadores.json";
import presidentes from "static/candidatos/presidentes.json";
import senadores from "static/candidatos/senadores.json";

export const candidatos = [
  ...deputadosEstaduais,
  ...deputadosFederais,
  ...governadores,
  ...senadores,
  ...presidentes,
];
