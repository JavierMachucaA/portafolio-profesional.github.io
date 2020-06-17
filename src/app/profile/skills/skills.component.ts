import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/class/skill.class';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public title = 'Habilidades';
  public skills: Skill[] = []; 
  constructor() {
    this.skills.push({name:'Java', icon:'java', percentage:80, description:'', skillSubitems:[{name:'Java 1.6'},{name:'Java 1.8'}, {name:'JSF'},{name:'JPA'},{name:'Spring Boot'}, {name:'Hibernate'}]});
    this.skills.push({name:'PHP', icon: 'php', percentage: 60, description:'', skillSubitems:[{name:'Laravel'}]});
    this.skills.push({name:'NodeJs', icon: 'nodejs', percentage: 80, description:'', skillSubitems:[{name:'ExpressJs'},{name:'Angular 6'},{name:'Angular 7'}, {name:'Angular 8'}]});
    this.skills.push({name:'SQL', icon: 'sql', percentage: 80, description:'', skillSubitems:[{name:'Mysql'}, {name:'Postgres'}, {name:'Oracle'}]});
    this.skills.push({name:'HTML,CSS,JS', icon: 'html', percentage: 80, description:'', skillSubitems:[]});
    this.skills.push({name:'NoSql', icon: 'nosql', percentage: 40, description:'', skillSubitems:[{name: 'MongoDB'}]});
  }

  ngOnInit() {
  }
}
