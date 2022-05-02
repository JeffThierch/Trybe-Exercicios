import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json())

app.get('/', (_req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Vivo')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});