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
exports.deleteProject = exports.updateProject = exports.createProject = exports.getProjects = void 0;
const constants_1 = require("../utils/constants");
const projects_1 = require("../models/projects");
const validation_1 = require("../utils/validation");
const errors_1 = require("../models/errors");
/**
 * Handles getting all projects
 *
 * @param req request
 * @param res response
 */
const getProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield projects_1.Projects.find();
    res.status(constants_1.HttpCode.OK).json(projects);
});
exports.getProjects = getProjects;
/**
 * Handles creating a project
 *
 * @param req request
 * @param res response
 */
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const project = req.body;
    if (!project || !(0, validation_1.validateProject)(project)) {
        throw new errors_1.BadRequest({ message: constants_1.Errors.PROJECT_REQUIRED });
    }
    const newProject = yield projects_1.Projects.create(project);
    res.status(constants_1.HttpCode.CREATED).json(newProject);
});
exports.createProject = createProject;
/**
 * Handles updating a project
 *
 * @param req request
 * @param res response
 */
const updateProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const project = req.body;
    const actualProject = yield projects_1.Projects.findById(id);
    if (!actualProject) {
        throw new errors_1.NotFound({ message: constants_1.Errors.PROJECT_NOT_FOUND });
    }
    else if (!(0, validation_1.validateProject)(project)) {
        throw new errors_1.BadRequest({ message: constants_1.Errors.PROJECT_REQUIRED });
    }
    yield projects_1.Projects.findByIdAndUpdate(id, project);
    const newProject = yield projects_1.Projects.findById(id);
    res.status(constants_1.HttpCode.OK).json(newProject);
});
exports.updateProject = updateProject;
/**
 * Handles deleting a project
 *
 * @param req request
 * @param res response
 */
const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const actualProject = yield projects_1.Projects.findById(id);
    if (!actualProject) {
        throw new errors_1.NotFound({ message: constants_1.Errors.PROJECT_NOT_FOUND });
    }
    yield projects_1.Projects.findByIdAndDelete(id);
    res.status(constants_1.HttpCode.NO_CONTENT).json({});
});
exports.deleteProject = deleteProject;
