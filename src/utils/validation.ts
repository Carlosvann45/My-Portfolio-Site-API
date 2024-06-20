import { IProject } from '../models/projects';
import { IExperince } from '../models/experinces';
import { ISkill } from '../models/skills';
import { IEmail } from '../models/emails';
import { IEducation } from '../models/education';
import Common from './common';

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
  let validSkills: Array<boolean> = [];
  let validLinks: Array<boolean> = [];

  if (project.skills) {
    project.skills.forEach((skill) => {
      validSkills.push(Common.isNotEmpty(skill));
    });
  } else {
    validSkills = [];
  }

  if (project.links) {
    project.links.forEach((link) => {
      const validImage =
        Common.isNotEmpty(link.image) && Common.isLink(link.image);
      const validText = Common.isNotEmpty(link.text);
      const validLink =
        Common.isNotEmpty(link.link) && Common.isLink(link.link);
      validLinks.push(validImage && validText && validLink);
    });
  } else {
    validLinks = [];
  }

  return (
    validTitle &&
    validStartDate &&
    validEndDate &&
    validDescriptions &&
    !validSkills.includes(false) &&
    !validLinks.includes(false)
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
  let validDescriptions: Array<boolean> = [];
  let validSkills: Array<boolean> = [];

  if (experince.descriptions) {
    experince.descriptions.forEach((description) => {
      validDescriptions.push(Common.isNotEmpty(description));
    });
  } else {
    validDescriptions = [];
  }

  if (experince.skills) {
    experince.skills.forEach((skill) => {
      validSkills.push(Common.isNotEmpty(skill));
    });
  } else {
    validSkills = [];
  }

  return (
    validTitle &&
    validCompany &&
    validEmploymentType &&
    validCity &&
    validState &&
    validStartDate &&
    validEndDate &&
    !validDescriptions.includes(false) &&
    !validSkills.includes(false)
  );
};

/**
 * Validates that a experince object meets database requirements
 *
 * @param experince experince to validate
 * @returns boolean
 */
const validateEducation = (education: IEducation) => {
  const validSchool = Common.isNotEmpty(education.school);
  const validDegree = Common.isNotEmpty(education.degree);
  const validMajor = Common.isNotEmpty(education.major);
  const validStartDate = Common.isNotEmpty(education.startDate);
  const validEndDate = education.isCurrent
    ? true
    : Common.isNotEmpty(education.endDate);
  const validActivities = [] as Array<boolean>;

  education.activities.forEach(
    (activity: { name: string; description: string }) => {
      validActivities.push(
        Common.isNotEmpty(activity.name) &&
          Common.isNotEmpty(activity.description),
      );
    },
  );

  return (
    validSchool &&
    validDegree &&
    validMajor &&
    validStartDate &&
    validEndDate &&
    !validActivities.includes(false)
  );
};

/**
 * Validates that a skill object meets database requirement
 *
 * @param skill skill
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

export {
  validateProject,
  validateExperince,
  validateSkill,
  validateEmail,
  validateEducation,
};
