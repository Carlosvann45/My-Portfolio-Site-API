"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = exports.validateTechnology = exports.validateExperince = exports.validateProject = void 0;
const common_1 = __importDefault(require("./common"));
/**
 * Validates that a project object meets database requirements
 *
 * @param project project to validate
 * @returns boolean
 */
const validateProject = (project) => {
    const validTitle = common_1.default.isNotEmpty(project.title);
    const validDescription = common_1.default.isNotEmpty(project.description);
    const validLink = common_1.default.isNotEmpty(project.link) && common_1.default.isLink(project.link);
    let images = [];
    if (project.images) {
        project.images.forEach(image => {
            images.push(common_1.default.isNotEmpty(image) && common_1.default.isLink(image));
        });
    }
    else {
        images = [false];
    }
    return validTitle && validDescription && validLink && !images.includes(false);
};
exports.validateProject = validateProject;
/**
 * Validates that a experince object meets database requirements
 *
 * @param experince experince to validate
 * @returns boolean
 */
const validateExperince = (experince) => {
    const validCompany = common_1.default.isNotEmpty(experince.company);
    const validTitle = common_1.default.isNotEmpty(experince.title);
    const validStartDate = experince.startDate !== null || experince.startDate !== undefined;
    let descriptions = [];
    if (experince.descriptions) {
        experince.descriptions.forEach(description => {
            descriptions.push(common_1.default.isNotEmpty(description));
        });
    }
    else {
        descriptions = [false];
    }
    return validTitle && validCompany && validStartDate && !descriptions.includes(false);
};
exports.validateExperince = validateExperince;
/**
 * Validates that a technology object meets database requirement
 *
 * @param technology technology
 * @returns boolean
 */
const validateTechnology = (technology) => {
    return common_1.default.isNotEmpty(technology.name) && common_1.default.isNotEmpty(technology.image) && common_1.default.isLink(technology.image);
};
exports.validateTechnology = validateTechnology;
/**
 * Validates that a technology object meets database requirement
 *
 * @param technology technology
 * @returns boolean
 */
const validateEmail = (email) => {
    return common_1.default.isNotEmpty(email.email) && common_1.default.isNotEmpty(email.subject) && common_1.default.isNotEmpty(email.message);
};
exports.validateEmail = validateEmail;
