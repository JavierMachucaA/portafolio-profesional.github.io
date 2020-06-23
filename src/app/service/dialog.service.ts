import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../profile/dialog/dialog.component';
import { ConstantsUtils } from '../utils/constants.utils';
import { DialogType } from '../enum/dialog.type';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  openInfoModal() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: ''
    });
  }

  public showCertificate(certificate: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '860px',
      data: {
        type: certificate.type,
        title: certificate.title,
        source : certificate.name
      }
    });
  }
}
