import {Component} from '@angular/core';
import {Despesa} from '../despesa';
import {Previa} from '../previa';
import {NgbCalendar, NgbDateAdapter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent {

  despesa: Despesa;

  previa: Previa;

  constructor(private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>) {

    this.despesa = {
      descricao: 'Zé delivery',
      valor: 87.30,
      donoDespesa: 'André',
      data: this.dateAdapter.toModel(this.ngbCalendar.getToday())
    };

    this.previa = {
      totalMes: 5500.00,
      despesasPorResponsavel: [
        {nome: 'Andre', valorPago: 3000},
        {nome: 'Flávia', valorPago: 2500}
      ]
    };
  }

  onIncluir(): void {
    console.log(this.ngbCalendar.getToday());
    console.log(this.despesa.data);
  }
}
