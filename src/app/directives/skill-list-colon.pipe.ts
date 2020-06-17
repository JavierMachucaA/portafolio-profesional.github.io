import { Pipe, PipeTransform } from '@angular/core';
import { SkillSubitem } from '../interfaces/skill-subitem.interface';

@Pipe({
  name: 'skillListColon'
})
export class SkillListColonPipe implements PipeTransform {

  transform(value: SkillSubitem[], ...args: any[]): any {
    return value.map(v=>v.name).join(', ');
  }

}
