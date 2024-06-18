import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import projectRoutes from './routes/projectRoutes';
import experinceRoutes from './routes/experinceRoutes';
import skillRoutes from './routes/skillRoutes';
import userRoutes from './routes/userRoutes';
import emailRoutes from './routes/emailRoutes';
import educationRoutes from './routes/educationRoutes';
import errorRoutes from './routes/errorRoutes';
import errorHandler from './middleware/errorMiddleware';
import connectDB from './config/db';

dotenv.config();
connectDB();

const app = express();
const routes = express.Router();
const port = process.env.PORT;

app.use(
  cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    preflightContinue: false,
    optionsSuccessStatus: 200,
  }),
);

routes.use(projectRoutes);
routes.use(experinceRoutes);
routes.use(skillRoutes);
routes.use(userRoutes);
routes.use(emailRoutes);
routes.use(educationRoutes);
routes.use(errorRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);
app.use(errorHandler);

app.listen(port, () => {
  console.log('⚡️[server]: Server is running');
});
