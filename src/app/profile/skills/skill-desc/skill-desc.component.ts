import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/class/skill.class';
import { SkillItem } from 'src/app/interfaces/skill-item.interface';

@Component({
  selector: 'app-skill-desc',
  templateUrl: './skill-desc.component.html',
  styleUrls: ['./skill-desc.component.scss']
})
export class SkillDescComponent implements OnInit {

  @Input() skills: Skill[];
  public skillsList: SkillItem[] = [];
  public addIcon = 'add';
  public clearIcon = 'clear';

  constructor() {
  }

  ngOnInit() {
    console.log(this.skills);
    let i = 0;
    this.skills.forEach( s =>
      this.skillsList.push({id: i++, skill: s , openIcon: this.addIcon, closeIcon: this.clearIcon, isOpen: true}));
  }

  public changeIcon( skillItem: SkillItem ) {
    const id = this.skillsList.indexOf(skillItem);
    console.log(id);
    this.skillsList[id].isOpen = !this.skillsList[id].isOpen;
  }

}
