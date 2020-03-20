import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/class/skill.class';

@Component({
  selector: 'app-skill-desc',
  templateUrl: './skill-desc.component.html',
  styleUrls: ['./skill-desc.component.scss']
})
export class SkillDescComponent implements OnInit {

  @Input() skills: Skill[];
  constructor() { }

  ngOnInit() {
    console.log('Skills : ', this.skills);
  }

}
