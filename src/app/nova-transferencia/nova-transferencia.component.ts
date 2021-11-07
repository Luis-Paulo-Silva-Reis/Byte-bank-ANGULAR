import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Transferencia } from '../model/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia', // Tag html para chamar o componente
  templateUrl: './nova-transferencia.component.html', //aqui e o de fato o html que se faz o componente
  styleUrls: ['./nova-transferencia.component.scss'] //estilo do componente
})


export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor!: number;
  destino!: number;

  constructor(private service: TransferenciaService, private router: Router) {

  }

  transferir() {
    console.log('Solicitada nova transferência');

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(valorEmitir)
      .subscribe(resultado => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
        error => console.error(error));

  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
// pode criar funcoes do componente dentro da class do componente
