import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const app: Express = express();
const port: number = 2525;

app.use(cors());

app.get('/phones', (_: Request, res: Response) => {
  res.sendStatus(200)
});

app.get('/phones/:id', (_: Request, res: Response) => {
  res.status(200).send('All good');
});

app.get('/tablets', (_: Request, res: Response) => {
  res.status(200).send('All good');
});

app.get('/tablets/:id', (_: Request, res: Response) => {
  res.status(200).send('All good');
});

app.get('/accessories', (_: Request, res: Response) => {
  res.status(200).send('All good');
});

app.get('/accessories/:id', (_: Request, res: Response) => {
  res.status(200).send('All good');
});

app.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});
