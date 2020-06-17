import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../profile/dialog/dialog.component';

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
}
