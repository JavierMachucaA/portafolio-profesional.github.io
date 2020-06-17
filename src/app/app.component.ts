import { Component, OnInit } from '@angular/core';
import { IconsService } from './service/icons.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './profile/dialog/dialog.component';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  public data: any;

  constructor(private iconService: IconsService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.iconService.registerIcons();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: this.data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.data = result;
    });
  }
  
}
