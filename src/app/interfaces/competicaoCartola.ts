export interface CompeticaoCartola {
  id_competicao: number;
  id_liga: number;
  nome_competicao: string;
  rodada_inicio: number;
  rodada_fim: number;
  numero_rodada_atual: number;
  data_fim_inscricao: string;
  hora_fim_inscricao: string;
  valor_competicao: number;
  valor_tx_adm: number;
  status_competicao: string;
  tipo_competicao: string;
  link_grupo_wapp: string;
  prioridade_de_consulta: number;
 
}