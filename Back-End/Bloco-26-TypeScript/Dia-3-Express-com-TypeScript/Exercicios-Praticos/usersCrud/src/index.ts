import express, { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import dotenv from 'dotenv';
import 'express-async-errors';
import userRoutes from './routes/User.routes'
import errorController from './controllers/Error.controller'

dotenv.config();

const app = express();

app.use(express.json())

app.get('/', (_req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Vivo')
})

app.use('/users', userRoutes);

app.use(errorController)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});