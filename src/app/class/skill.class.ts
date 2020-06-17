import { SkillSubitem } from '../interfaces/skill-subitem.interface';

export class Skill {
    name: string;
    icon: string;
    percentage: number;
    description: string;
    skillSubitems: SkillSubitem[];

    constructor(name: string, icon: string, percentage: number, description ?: string, skillSubitem ?: SkillSubitem[]) {
        this.name = name;
        this.icon = icon;
        this.percentage = percentage;
        this.description = description;
        this.skillSubitems = skillSubitem;
    }
}
