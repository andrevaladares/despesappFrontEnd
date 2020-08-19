import { Component } from '@angular/core';
import {Despesa} from '../despesa';
import {Previa} from '../previa';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent {
  despesa: Despesa = {
    descricao: 'Zé delivery',
    valor: 87.30,
    donoDespesa: 'André',
    data: new Date()
  };

  previa: Previa = {
    totalMes: 5500.00,
    despesasPorResponsavel: [
      {nome: 'Andre', valorPago: 3000},
      {nome: 'Flávia', valorPago: 2500}
    ]
  };

}
