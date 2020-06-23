import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/service/dialog.service';
import { ConstantsUtils } from 'src/app/utils/constants.utils';
import { DialogType } from 'src/app/enum/dialog.type';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  public title = 'Certificaciones';
  public showCertificate = true;
  private pathCertificates = ConstantsUtils.PATH_CERTIFICATES;
  public certificates = null;
  constructor(private modalService: DialogService) { }

  ngOnInit() {
    this.certificates = [
      {
        name: this.pathCertificates + '/' + 'certificado-nodejs.jpg',
        title: 'Node : De Cero a Experto',
        description: `En este curso se abarcan los temas: MongoDB, SocketIO, Handlebars,` +
        `MLab, JWT, Git, GitHub,Robo 3T, JSON, Google Services, Google APIs, Heroku, MySQL,` +
        `TypeScript, PostMan,Express, YARGS, Aplicaciones de consola, Paquetes, NPM,` + 
        `RESTServer, entre otros temas`,
        color: 'rgb(219, 228, 144)',
        type: DialogType.CERTIFICATE
      },
      {
        name: this.pathCertificates + '/' + 'certificado-angular.jpg',
        title: 'Angular: De cero a experto creando aplicaciones (Angular 9+)',
        description: `Las bases de Angular, TypeScript, ECMAScript 6, Sockets,`+
        `Angular CLI, Local Storage, Bootstrap 4, Spotify API, Youtube API, entre otras tecnologías`,
        color: 'rgb(143, 188, 143)',
        type: DialogType.CERTIFICATE
      }
    ];
  }

  public showDialog (certificate :any){
    console.log('mostrar dialog');
    this.modalService.showCertificate(certificate);
  }

}
