import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogStructure } from './models/dialog-structure';


describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  const mockDialogRef = {
    confirmDialog: jasmine.createSpy('confirmDialog')
  };

  beforeEach(async(() => {

    const matDialogDataValue:DialogStructure = {
      title: 'Titulo de prueba',
      content: "Contenido de prueba",
      textCancelButton: 'Cerrar',
      textOKButton: 'Confirmar'
    };

    TestBed.configureTestingModule({
      declarations: [ DialogComponent ],
      imports: [MatDialogModule],
      providers: [ {
        provide: MatDialogRef,
        useValue: mockDialogRef
      }, {
        provide: MAT_DIALOG_DATA,
        useValue: matDialogDataValue // Add any data you wish to test if it is passed/used correctly
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
