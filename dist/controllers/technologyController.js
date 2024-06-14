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
exports.deleteTechnology = exports.updateTechnology = exports.createTechnology = exports.getTechnologies = void 0;
const constants_1 = require("../utils/constants");
const validation_1 = require("../utils/validation");
const errors_1 = require("../models/errors");
const technologies_1 = require("../models/technologies");
/**
 * Handles getting all technologies
 *
 * @param req request
 * @param res response
 */
const getTechnologies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const technologies = yield technologies_1.Technologies.find();
    res.status(constants_1.HttpCode.OK).json(technologies);
});
exports.getTechnologies = getTechnologies;
/**
 * Handles creating a technology
 *
 * @param req request
 * @param res response
 */
const createTechnology = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const techonology = req.body;
    if (!techonology || !(0, validation_1.validateTechnology)(techonology)) {
        throw new errors_1.BadRequest({ message: constants_1.Errors.TECH_REQUIRED });
    }
    const newTechnology = yield technologies_1.Technologies.create(techonology);
    res.status(constants_1.HttpCode.CREATED).json(newTechnology);
});
exports.createTechnology = createTechnology;
/**
 * Handles updating a technology
 *
 * @param req request
 * @param res response
 */
const updateTechnology = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const techonology = req.body;
    const actualTechnology = yield technologies_1.Technologies.findById(id);
    if (!actualTechnology) {
        throw new errors_1.NotFound({ message: constants_1.Errors.TECH_NOT_FOUND });
    }
    else if (!(0, validation_1.validateTechnology)(techonology)) {
        throw new errors_1.BadRequest({ message: constants_1.Errors.TECH_REQUIRED });
    }
    yield technologies_1.Technologies.findByIdAndUpdate(id, techonology);
    const newTechnology = yield technologies_1.Technologies.findById(id);
    res.status(constants_1.HttpCode.OK).json(newTechnology);
});
exports.updateTechnology = updateTechnology;
/**
 * Handles deleting a technology
 *
 * @param req request
 * @param res response
 */
const deleteTechnology = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const actualTechnology = yield technologies_1.Technologies.findById(id);
    if (!actualTechnology) {
        throw new errors_1.NotFound({ message: constants_1.Errors.TECH_NOT_FOUND });
    }
    yield technologies_1.Technologies.findByIdAndDelete(id);
    res.status(constants_1.HttpCode.NO_CONTENT).json({});
});
exports.deleteTechnology = deleteTechnology;
