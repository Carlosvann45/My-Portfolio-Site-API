"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEducation = exports.validateEmail = exports.validateSkill = exports.validateExperince = exports.validateProject = void 0;
const common_1 = __importDefault(require("./common"));
/**
 * Validates that a project object meets database requirements
 *
 * @param project project to validate
 * @returns boolean
 */
const validateProject = (project) => {
    const validTitle = common_1.default.isNotEmpty(project.title);
    const validStartDate = common_1.default.isNotEmpty(project.startDate);
    const validEndDate = project.isCurrent
        ? true
        : common_1.default.isNotEmpty(project.endDate);
    const validDescriptions = common_1.default.isNotEmpty(project.description);
    let validSkills = [];
    let validLinks = [];
    if (project.skills) {
        project.skills.forEach((skill) => {
            validSkills.push(common_1.default.isNotEmpty(skill));
        });
    }
    else {
        validSkills = [];
    }
    if (project.links) {
        project.links.forEach((link) => {
            const validImage = common_1.default.isNotEmpty(link.image) && common_1.default.isLink(link.image);
            const validText = common_1.default.isNotEmpty(link.text);
            const validLink = common_1.default.isNotEmpty(link.link) && common_1.default.isLink(link.link);
            validLinks.push(validImage && validText && validLink);
        });
    }
    else {
        validLinks = [];
    }
    return (validTitle &&
        validStartDate &&
        validEndDate &&
        validDescriptions &&
        !validSkills.includes(false) &&
        !validLinks.includes(false));
};
exports.validateProject = validateProject;
/**
 * Validates that a experince object meets database requirements
 *
 * @param experince experince to validate
 * @returns boolean
 */
const validateExperince = (experince) => {
    const validTitle = common_1.default.isNotEmpty(experince.title);
    const validCompany = common_1.default.isNotEmpty(experince.company);
    const validEmploymentType = common_1.default.isNotEmpty(experince.employmentType);
    const validCity = common_1.default.isNotEmpty(experince.city);
    const validState = common_1.default.isNotEmpty(experince.state);
    const validStartDate = common_1.default.isNotEmpty(experince.startDate);
    const validEndDate = experince.isCurrent
        ? true
        : common_1.default.isNotEmpty(experince.endDate);
    let validDescriptions = [];
    let validSkills = [];
    if (experince.descriptions) {
        experince.descriptions.forEach((description) => {
            validDescriptions.push(common_1.default.isNotEmpty(description));
        });
    }
    else {
        validDescriptions = [];
    }
    if (experince.skills) {
        experince.skills.forEach((skill) => {
            validSkills.push(common_1.default.isNotEmpty(skill));
        });
    }
    else {
        validSkills = [];
    }
    return (validTitle &&
        validCompany &&
        validEmploymentType &&
        validCity &&
        validState &&
        validStartDate &&
        validEndDate &&
        !validDescriptions.includes(false) &&
        !validSkills.includes(false));
};
exports.validateExperince = validateExperince;
/**
 * Validates that a experince object meets database requirements
 *
 * @param experince experince to validate
 * @returns boolean
 */
const validateEducation = (education) => {
    const validSchool = common_1.default.isNotEmpty(education.school);
    const validDegree = common_1.default.isNotEmpty(education.degree);
    const validMajor = common_1.default.isNotEmpty(education.major);
    const validStartDate = common_1.default.isNotEmpty(education.startDate);
    const validEndDate = education.isCurrent
        ? true
        : common_1.default.isNotEmpty(education.endDate);
    const validActivities = [];
    education.activities.forEach((activity) => {
        validActivities.push(common_1.default.isNotEmpty(activity.name) &&
            common_1.default.isNotEmpty(activity.description));
    });
    return (validSchool &&
        validDegree &&
        validMajor &&
        validStartDate &&
        validEndDate &&
        !validActivities.includes(false));
};
exports.validateEducation = validateEducation;
/**
 * Validates that a skill object meets database requirement
 *
 * @param skill skill
 * @returns boolean
 */
const validateSkill = (skill) => {
    return common_1.default.isNotEmpty(skill.name);
};
exports.validateSkill = validateSkill;
/**
 * Validates that a technology object meets database requirement
 *
 * @param technology technology
 * @returns boolean
 */
const validateEmail = (email) => {
    return (common_1.default.isNotEmpty(email.email) &&
        common_1.default.isNotEmpty(email.subject) &&
        common_1.default.isNotEmpty(email.message));
};
exports.validateEmail = validateEmail;
