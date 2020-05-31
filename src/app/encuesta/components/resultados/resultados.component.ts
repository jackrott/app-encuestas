import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner.service';

export interface GridResultado {
  email: string;
  respuesta: string;
}

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private spinnerService: SpinnerService) { }

  displayedColumns: string[] = ['email', 'respuesta'];
  resultadoEncuesta: any;
  //dataSource:GridResultado[] = [];
  dataSourcesGrid = [];
  loadingSpinner:boolean = false;
  ngOnInit(): void {

    this.spinnerService.restart();
    this.spinnerService.loaderStatus.subscribe((val: boolean) => {
          this.loadingSpinner = val;
    });
    this.resultadoEncuesta = this.route.snapshot.data['resultadoEncuesta'];
    for (let key in this.resultadoEncuesta) {
      let datasrc = [];
      for(let i = 0; i < this.resultadoEncuesta[key].length; i++) {
        datasrc.push(
          {email: this.resultadoEncuesta[key][i]['email'], respuesta: this.resultadoEncuesta[key][i]['descripcionRespuesta']})
      }
      this.dataSourcesGrid.push({
        title: key,
        datasource: datasrc
      });
    }

    console.info(this.dataSourcesGrid);
  }
}
