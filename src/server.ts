import express from 'express';
import dotenv from 'dotenv';
import projectRoutes from './routes/projectRoutes';
import experinceRoutes from './routes/experinceRoutes';
import technologyRoutes from './routes/techologyRoutes';
import userRoutes from './routes/userRoutes';
import emailRoutes from './routes/emailRoutes';
import errorRoutes from './routes/errorRoutes';
import errorHandler from './middleware/errorMiddleware';
import connectDB from './config/db';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();
const routes = express.Router();
const port = process.env.PORT;

app.use(cors());

routes.use(projectRoutes);
routes.use(experinceRoutes);
routes.use(technologyRoutes);
routes.use(userRoutes);
routes.use(emailRoutes);
routes.use(errorRoutes);

app.use(express.json());
app.use(express.urlencoded({extended: false }));
app.use(routes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});