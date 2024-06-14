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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExperince = exports.updateExperince = exports.createExperince = exports.getExperinces = void 0;
const constants_1 = require("../utils/constants");
const errors_1 = require("../models/errors");
const validation_1 = require("../utils/validation");
const experinces_1 = require("../models/experinces");
const common_1 = __importDefault(require("../utils/common"));
/**
 * Handles getting all experinces
 *
 * @param req request
 * @param res response
 */
const getExperinces = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const experinces = yield experinces_1.Experinces.find();
    res.status(constants_1.HttpCode.OK).json(experinces);
});
exports.getExperinces = getExperinces;
/**
 * Handles creating a experince
 *
 * @param req request
 * @param res response
 */
const createExperince = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const experince = req.body;
    if (!experince || !(0, validation_1.validateExperince)(experince)) {
        throw new errors_1.BadRequest({ message: constants_1.Errors.EXPERINCE_REQUIRED });
    }
    else if (!common_1.default.validDate(experince.startDate)) {
        throw new errors_1.BadRequest({ message: constants_1.Errors.EXPERINCE_DATES });
    }
    else if (experince.endDate && !common_1.default.validDate(experince.endDate)) {
        throw new errors_1.BadRequest({ message: constants_1.Errors.EXPERINCE_DATES });
    }
    const newExperince = yield experinces_1.Experinces.create(experince);
    res.status(constants_1.HttpCode.CREATED).json(newExperince);
});
exports.createExperince = createExperince;
/**
 * Handles updating a experince
 *
 * @param req request
 * @param res response
 */
const updateExperince = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const experince = req.body;
    const actualExperince = yield experinces_1.Experinces.findById(id);
    if (!actualExperince) {
        throw new errors_1.NotFound({ message: constants_1.Errors.EXPERINCE_NOT_FOUND });
    }
    else if (!(0, validation_1.validateExperince)(experince)) {
        throw new errors_1.BadRequest({ message: constants_1.Errors.EXPERINCE_REQUIRED });
    }
    else if (!common_1.default.validDate(experince.startDate)) {
        throw new errors_1.BadRequest({ message: constants_1.Errors.EXPERINCE_DATES });
    }
    else if (experince.endDate && !common_1.default.validDate(experince.endDate)) {
        throw new errors_1.BadRequest({ message: constants_1.Errors.EXPERINCE_DATES });
    }
    yield experinces_1.Experinces.findByIdAndUpdate(id, experince);
    const newExperince = yield experinces_1.Experinces.findById(id);
    res.status(constants_1.HttpCode.OK).json(newExperince);
});
exports.updateExperince = updateExperince;
/**
 * Handles deleting a experince
 *
 * @param req request
 * @param res response
 */
const deleteExperince = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const actualExperince = yield experinces_1.Experinces.findById(id);
    if (!actualExperince) {
        throw new errors_1.NotFound({ message: constants_1.Errors.EXPERINCE_NOT_FOUND });
    }
    yield experinces_1.Experinces.findByIdAndDelete(id);
    res.status(constants_1.HttpCode.NO_CONTENT).json({});
});
exports.deleteExperince = deleteExperince;
