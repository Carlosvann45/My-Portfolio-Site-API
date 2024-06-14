"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSkill = exports.updateSkill = exports.createSkill = exports.getSkills = void 0;
const constants_1 = require("../utils/constants");
const validation_1 = require("../utils/validation");
const errors_1 = require("../models/errors");
const skills_1 = require("../models/skills");
/**
 * Handles getting all skills
 *
 * @param req request
 * @param res response
 */
const getSkills = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const skills = yield skills_1.Skills.find();
    res.status(constants_1.HttpCode.OK).json(skills);
});
exports.getSkills = getSkills;
/**
 * Handles creating a skill
 *
 * @param req request
 * @param res response
 */
const createSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const skill = req.body;
    if (!skill || !(0, validation_1.validateSkill)(skill)) {
        throw new errors_1.BadRequest({ message: constants_1.Errors.SKILL_REQUIRED });
    }
    const newSkill = yield skills_1.Skills.create(skill);
    res.status(constants_1.HttpCode.CREATED).json(newSkill);
});
exports.createSkill = createSkill;
/**
 * Handles updating a skill
 *
 * @param req request
 * @param res response
 */
const updateSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const skill = req.body;
    const actualSkill = yield skills_1.Skills.findById(id);
    if (!actualSkill) {
        throw new errors_1.NotFound({ message: constants_1.Errors.SKILL_NOT_FOUND });
    }
    else if (!(0, validation_1.validateSkill)(skill)) {
        throw new errors_1.BadRequest({ message: constants_1.Errors.SKILL_REQUIRED });
    }
    yield skills_1.Skills.findByIdAndUpdate(id, skill);
    const newSkill = yield skills_1.Skills.findById(id);
    res.status(constants_1.HttpCode.OK).json(newSkill);
});
exports.updateSkill = updateSkill;
/**
 * Handles deleting a skill
 *
 * @param req request
 * @param res response
 */
const deleteSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const actualSkill = yield skills_1.Skills.findById(id);
    if (!actualSkill) {
        throw new errors_1.NotFound({ message: constants_1.Errors.SKILL_NOT_FOUND });
    }
    yield skills_1.Skills.findByIdAndDelete(id);
    res.status(constants_1.HttpCode.NO_CONTENT).json({});
});
exports.deleteSkill = deleteSkill;
