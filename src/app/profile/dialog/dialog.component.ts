import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogType } from 'src/app/enum/dialog.type';
import { ConstantsUtils } from 'src/app/utils/constants.utils';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  public dialogType = DialogType;
  private pathCertificates = ConstantsUtils.PATH_CERTIFICATES;
  
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }

  public close(): void {
    this.dialogRef.close();
  }

}
