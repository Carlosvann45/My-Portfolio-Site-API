"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = exports.validateSkill = exports.validateExperince = exports.validateProject = void 0;
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
    let skills = [];
    let links = [];
    if (project.skills) {
        project.skills.forEach((skill) => {
            skills.push(common_1.default.isNotEmpty(skill));
        });
    }
    else {
        skills = [];
    }
    if (project.links) {
        project.links.forEach((link) => {
            const validImage = common_1.default.isNotEmpty(link.image) && common_1.default.isLink(link.image);
            const validText = common_1.default.isNotEmpty(link.text);
            const validLink = common_1.default.isNotEmpty(link.link) && common_1.default.isLink(link.link);
            links.push(validImage && validText && validLink);
        });
    }
    else {
        links = [];
    }
    return (validTitle &&
        validStartDate &&
        validEndDate &&
        validDescriptions &&
        !skills.includes(false) &&
        !links.includes(false));
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
    let descriptions = [];
    let skills = [];
    if (experince.descriptions) {
        experince.descriptions.forEach((description) => {
            descriptions.push(common_1.default.isNotEmpty(description));
        });
    }
    else {
        descriptions = [];
    }
    if (experince.skills) {
        experince.skills.forEach((skill) => {
            skills.push(common_1.default.isNotEmpty(skill));
        });
    }
    else {
        skills = [];
    }
    return (validTitle &&
        validCompany &&
        validEmploymentType &&
        validCity &&
        validState &&
        validStartDate &&
        validEndDate &&
        !descriptions.includes(false) &&
        !skills.includes(false));
};
exports.validateExperince = validateExperince;
/**
 * Validates that a skill object meets database requirement
 *
 * @param technology skill
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
