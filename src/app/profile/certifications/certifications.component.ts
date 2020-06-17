import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/service/dialog.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  public title = 'Certificaciones';
  public showCertificate = true;

  constructor(private modalService: DialogService) { }

  ngOnInit() {
  }

  public mouseEnter(data : any){
    this.showCertificate = data;
  }

  public mouseLeave(data : any){
    this.showCertificate = data;
  }

  public showDialog (){
    console.log('mostrar dialog');
    this.modalService.openInfoModal();
  }

}
