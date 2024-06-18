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
exports.deleteEducation = exports.updateEducation = exports.createEducation = exports.getEducations = void 0;
const constants_1 = require("../utils/constants");
const education_1 = require("../models/education");
const validation_1 = require("../utils/validation");
const errors_1 = require("../models/errors");
/**
 * Handles getting all education data
 *
 * @param req request
 * @param res response
 */
const getEducations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const educations = yield education_1.Educations.find();
    res.status(constants_1.HttpCode.OK).json(educations);
});
exports.getEducations = getEducations;
/**
 * Handles creating an education
 *
 * @param req request
 * @param res response
 */
const createEducation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const education = req.body;
    if (!education || !(0, validation_1.validateEducation)(education)) {
        throw new errors_1.BadRequest({ message: constants_1.Errors.EDUCATION_REQUIRED });
    }
    const newEducation = yield education_1.Educations.create(education);
    res.status(constants_1.HttpCode.CREATED).json(newEducation);
});
exports.createEducation = createEducation;
/**
 * Handles updating an education object
 *
 * @param req request
 * @param res response
 */
const updateEducation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const education = req.body;
    const actualEducation = yield education_1.Educations.findById(id);
    if (!actualEducation) {
        throw new errors_1.NotFound({ message: constants_1.Errors.EDUCATION_NOT_FOUND });
    }
    else if (!(0, validation_1.validateEducation)(education)) {
        throw new errors_1.BadRequest({ message: constants_1.Errors.EDUCATION_REQUIRED });
    }
    yield education_1.Educations.findByIdAndUpdate(id, education);
    const newEducation = yield education_1.Educations.findById(id);
    res.status(constants_1.HttpCode.OK).json(newEducation);
});
exports.updateEducation = updateEducation;
/**
 * Handles deleting an education object
 *
 * @param req request
 * @param res response
 */
const deleteEducation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const actualEducation = yield education_1.Educations.findById(id);
    if (!actualEducation) {
        throw new errors_1.NotFound({ message: constants_1.Errors.EDUCATION_NOT_FOUND });
    }
    yield education_1.Educations.findByIdAndDelete(id);
    res.status(constants_1.HttpCode.NO_CONTENT).json({});
});
exports.deleteEducation = deleteEducation;
