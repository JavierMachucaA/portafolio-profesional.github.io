import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/class/skill.class';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public title = 'Skills';
  public skills: Skill[] = []; 
  constructor() {
    this.skills.push(new Skill('Java', 'java', 80, ''));
    this.skills.push(new Skill('PHP', 'php', 60, ''));
    this.skills.push(new Skill('NodeJs', 'nodejs', 80, ''));
    this.skills.push(new Skill('SQL', 'sql', 80, ''));
    this.skills.push(new Skill('HTML,CSS,JS', 'html', 80, ''));
   }

  ngOnInit() {
  }
}
