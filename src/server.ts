import express, { Express} from 'express';
import dotenv from 'dotenv';
import projectRoutes from './routes/projectRoutes';
import experinceRoutes from './routes/experinceRoutes';
import errorHandler from './middleware/middleware';
import connectDB from './config/db';

dotenv.config();
connectDB();

const app: Express = express();
const routes = express.Router();
const port = process.env.PORT;

routes.use(projectRoutes);
routes.use(experinceRoutes);

app.use(express.json());
app.use((express.urlencoded({extended: false })));
app.use(routes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});