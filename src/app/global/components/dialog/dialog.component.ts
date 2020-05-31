import { Component, OnInit, Inject } from '@angular/core';
import { DialogStructure } from './models/dialog-structure';
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

    constructor ( 
            public dialogRef: MatDialogRef<DialogComponent>, 
            @Inject(MAT_DIALOG_DATA) public data: DialogStructure ) { }

    
    onNoClick(): void {
        this.dialogRef.close();
    }

}
