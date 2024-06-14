"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const projectRoutes_1 = __importDefault(require("./routes/projectRoutes"));
const experinceRoutes_1 = __importDefault(require("./routes/experinceRoutes"));
const techologyRoutes_1 = __importDefault(require("./routes/techologyRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const emailRoutes_1 = __importDefault(require("./routes/emailRoutes"));
const errorRoutes_1 = __importDefault(require("./routes/errorRoutes"));
const errorMiddleware_1 = __importDefault(require("./middleware/errorMiddleware"));
const db_1 = __importDefault(require("./config/db"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
const routes = express_1.default.Router();
const port = process.env.PORT;
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    preflightContinue: false,
    optionsSuccessStatus: 200
}));
routes.use(projectRoutes_1.default);
routes.use(experinceRoutes_1.default);
routes.use(techologyRoutes_1.default);
routes.use(userRoutes_1.default);
routes.use(emailRoutes_1.default);
routes.use(errorRoutes_1.default);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(routes);
app.use(errorMiddleware_1.default);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running`);
});
