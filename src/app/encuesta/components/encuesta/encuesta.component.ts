import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EncuestaService } from '../../services/encuesta.service';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogStructure } from 'src/app/global/components/dialog/models/dialog-structure';
import { DialogComponent } from 'src/app/global/components/dialog/dialog.component';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  formatoEncuesta: any;
  loadingSpinner:boolean = false;
  encuestaForm = new FormGroup({
    email: new FormControl('', [ Validators.required, Validators.email]),
    respuesta: new FormControl('', [ Validators.required]),
  });

  constructor( private route: ActivatedRoute, 
    private encuestaService:EncuestaService,
    private spinnerService: SpinnerService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.spinnerService.restart();
    this.spinnerService.loaderStatus.subscribe((val: boolean) => {
          this.loadingSpinner = val;
    });

    //resolve data
    this.formatoEncuesta = this.route.snapshot.data['formularioEncuesta'];
  }

  registrarEncuesta() {
    this.openDialogConfirm();
  } 

  private _saveEncuesta() {
    this.spinnerService.turnOnSpinner();
    let form = {};
    form['idEncuesta'] = this.formatoEncuesta.encuestaId;
    form['email'] = this.encuestaForm.value.email;

    const rbRespuesta = this.encuestaForm.value.respuesta.split("-");
    form['respuestas'] = [
      {'idPregunta': rbRespuesta[0] , 'valorRespuesta': rbRespuesta[1]}
    ];

    this.encuestaService.saveEncuesta(form).subscribe( (success) => {
      this.spinnerService.turnOffSpinner();
      this.encuestaForm.reset();
      this.openDialogBasic(true, 'Gracias por responder la encuesta.');
    }, error => {
        this.spinnerService.turnOffSpinner();
        this.openDialogBasic(false, error.error.message)
    });
  }

  public openDialogConfirm(): void {
    let dialogStructure: DialogStructure = new DialogStructure();
    dialogStructure.title = 'Confirmar envio';
    dialogStructure.content = '¿Esta seguro de enviar su respuesta?';
    dialogStructure.textCancelButton = 'Cancelar';
    dialogStructure.textOKButton = 'Confirmar';
    
    const dialogRef = this.dialog.open(DialogComponent, {
        width: '40%',
        data: dialogStructure
    });

    dialogRef.afterClosed().subscribe(result => {
        
        /* Si fue cerrado desde el botón de confirmación - realizar llamada a rest api para crear, editar o eliminar el rol */
        if(result) {
          this._saveEncuesta();
        }
    });
  }

  public openDialogBasic(success: Boolean, msg: string): void {
    let dialogStructure: DialogStructure = new DialogStructure();
    dialogStructure.title = 'Información';
    dialogStructure.content = msg;
    dialogStructure.textCancelButton = 'Cerrar';
    
    const dialogRef = this.dialog.open(DialogComponent, {
        width: '40%',
        data: dialogStructure
    });
  }
}
