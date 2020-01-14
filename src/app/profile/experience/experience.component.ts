import { Component, OnInit } from '@angular/core';
import { ArticleDto } from '../structure/DTO/article.dto';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public articles: ArticleDto[];
  constructor() { }

  ngOnInit() {
    this.articles = [
      {
        id: 1,
        charge : 'Ingeniero en Proyectos',
        intervalTime : 'Octubre 2018 - Diciembre 2019',
        compay : 'Zeke',
        description: `Trabajando con el rol de Analista desarrollador, se construyen aplicaciones web en Angular con
        backend en Java, Angular con Laravel, una aplicación Móvil en Flutter, entre otros
        desarrollos.`,
        roles : ['Desarrollador Software', 'Desarrollador Aplicaciones', 'Desarrollador Web']
      },
      {
        id: 2,
        charge : 'Desarrollador Junior',
        intervalTime : 'Enero - Agosto 2019',
        compay : 'Wiseconn',
        description: `Como desarrollador, se aporta en proyectos Java capturando información de servicio rest y
                      se apoya en cambios efectuados sobre aplciación de escritorio Java Swing del producto que
                      entrega la empresa a sus clientes.`,
        roles : ['Desarrollador Software', 'Desarrollador Web',]
      },
      {
        id: 3,
        charge : 'Ingeniero en Proyectos',
        intervalTime : 'Enero - Agosto 2019',
        compay : 'Accenture',
        description: `Como desarrollador, se aporta en proyectos Java capturando información de servicio rest y
                      se apoya en cambios efectuados sobre aplciación de escritorio Java Swing del producto que
                      entrega la empresa a sus clientes.`,
        roles : ['Desarrollador Software', 'Desarrollador Web', ]
      },
    ];
  }

}
