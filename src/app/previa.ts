export interface DespesaPorResponsavel {
  nome: string;
  valorPago: number;
}

export interface Previa {
  totalMes: number;
  despesasPorResponsavel: DespesaPorResponsavel[];
}
