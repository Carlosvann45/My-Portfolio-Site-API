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
  const validStartDate = Common.isNotEmpty(project.startDate);
  const validEndDate = project.isCurrent
    ? true
    : Common.isNotEmpty(project.endDate);
  const validDescriptions = Common.isNotEmpty(project.description);
  let skills: Array<boolean> = [];
  let links: Array<boolean> = [];

  if (project.skills) {
    project.skills.forEach((skill) => {
      skills.push(Common.isNotEmpty(skill));
    });
  } else {
    skills = [];
  }

  if (project.links) {
    project.links.forEach((link) => {
      const validLink = Common.isLink(link.image) && Common.isLink(link.image);
      const validText = Common.isNotEmpty(link.text);
      links.push(validLink && validText);
    });
  } else {
    links = [];
  }

  return (
    validTitle &&
    validStartDate &&
    validEndDate &&
    validDescriptions &&
    !skills.includes(false) &&
    !links.includes(false)
  );
};

/**
 * Validates that a experince object meets database requirements
 *
 * @param experince experince to validate
 * @returns boolean
 */
const validateExperince = (experince: IExperince) => {
  const validTitle = Common.isNotEmpty(experince.title);
  const validCompany = Common.isNotEmpty(experince.company);
  const validEmploymentType = Common.isNotEmpty(experince.employmentType);
  const validCity = Common.isNotEmpty(experince.city);
  const validState = Common.isNotEmpty(experince.state);
  const validStartDate = Common.isNotEmpty(experince.startDate);
  const validEndDate = experince.isCurrent
    ? true
    : Common.isNotEmpty(experince.endDate);
  let descriptions: Array<boolean> = [];
  let skills: Array<boolean> = [];

  if (experince.descriptions) {
    experince.descriptions.forEach((description) => {
      descriptions.push(Common.isNotEmpty(description));
    });
  } else {
    descriptions = [];
  }

  if (experince.skills) {
    experince.skills.forEach((skill) => {
      skills.push(Common.isNotEmpty(skill));
    });
  } else {
    skills = [];
  }

  return (
    validTitle &&
    validCompany &&
    validEmploymentType &&
    validCity &&
    validState &&
    validStartDate &&
    validEndDate &&
    !descriptions.includes(false) &&
    !skills.includes(false)
  );
};

/**
 * Validates that a skill object meets database requirement
 *
 * @param technology skill
 * @returns boolean
 */
const validateSkill = (skill: ISkill) => {
  return Common.isNotEmpty(skill.name);
};

/**
 * Validates that a technology object meets database requirement
 *
 * @param technology technology
 * @returns boolean
 */
const validateEmail = (email: IEmail) => {
  return (
    Common.isNotEmpty(email.email) &&
    Common.isNotEmpty(email.subject) &&
    Common.isNotEmpty(email.message)
  );
};

export { validateProject, validateExperince, validateSkill, validateEmail };
