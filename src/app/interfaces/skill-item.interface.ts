import { Skill } from '../class/skill.class';

export interface SkillItem {
    id: number;
    skill: Skill;
    openIcon: string;
    closeIcon: string;
    isOpen: boolean;
}