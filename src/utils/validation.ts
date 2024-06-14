import { IProject } from "../models/projects";
import { IExperince } from "../models/experinces";
import { ISkill } from "../models/skills";
import { IEmail } from "../models/emails";
import Common from "./common";

/**
 * Validates that a project object meets database requirements
 * 
 * @param project project to validate
 * @returns boolean
 */
const validateProject = (project: IProject) => {
    const validTitle = Common.isNotEmpty(project.title);
    const validDescription = Common.isNotEmpty(project.description);
    const validLink = Common.isNotEmpty(project.link) && Common.isLink(project.link);
    let images: Array<boolean> = [];
    
    if (project.images) {
        project.images.forEach(image => {
            images.push(Common.isNotEmpty(image) && Common.isLink(image));
        });
    } else {
        images = [false];
    }
    
    return validTitle && validDescription && validLink && !images.includes(false);
}

/**
 * Validates that a experince object meets database requirements
 * 
 * @param experince experince to validate
 * @returns boolean
 */
const validateExperince = (experince: IExperince) => {
    const validCompany = Common.isNotEmpty(experince.company);
    const validTitle = Common.isNotEmpty(experince.title);
    const validStartDate = experince.startDate !== null || experince.startDate !== undefined
    let descriptions: Array<boolean> = [];
    
    if (experince.descriptions) {
        experince.descriptions.forEach(description => {
            descriptions.push(Common.isNotEmpty(description));
        });
    } else {
        descriptions = [false];
    }

    return validTitle && validCompany && validStartDate && !descriptions.includes(false);
}

/**
 * Validates that a skill object meets database requirement
 * 
 * @param technology skill 
 * @returns boolean
 */
const validateSkill = (skill: ISkill) => {
    return Common.isNotEmpty(skill.name);
}

/**
 * Validates that a technology object meets database requirement
 * 
 * @param technology technology 
 * @returns boolean
 */
const validateEmail = (email: IEmail) => {
    return Common.isNotEmpty(email.email) && Common.isNotEmpty(email.subject) && Common.isNotEmpty(email.message);
}

export { validateProject, validateExperince, validateSkill, validateEmail };