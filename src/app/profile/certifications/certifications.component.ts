import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/service/dialog.service';
import { ConstantsUtils } from 'src/app/utils/constants.utils';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  public title = 'Certificaciones';
  public showCertificate = true;
  public pathCertificates = ConstantsUtils.PATH_CERTIFICATES;
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
        `RESTServer, entre otros temas`
      },
      /*{
        name: this.pathCertificates + '/' + 'certificado-nodejs.jpg',
        title: 'Node : De Cero a Experto',
        description: `En este curso se abarcan los temas: MongoDB, SocketIO, Handlebars,` +
        `MLab, JWT, Git, GitHub,Robo 3T, JSON, Google Services, Google APIs, Heroku, MySQL,` +
        `TypeScript, PostMan,Express, YARGS, Aplicaciones de consola, Paquetes, NPM,` + 
        `RESTServer, entre otros temas`
      }*/
    ];
  }

  public showDialog (){
    console.log('mostrar dialog');
    this.modalService.openInfoModal();
  }

}
