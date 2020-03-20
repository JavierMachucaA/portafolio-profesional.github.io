export class Skill {
    name: string;
    icon: string;
    percentage: number;
    description: string;

    constructor(name: string, icon: string, percentage: number, description: string) {
        this.name = name;
        this.icon = icon;
        this.percentage = percentage;
        this.description = description;
    }
}
