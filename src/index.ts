import express from 'express';
import cors from 'cors';
import { mainRouter } from './routers/routers';
import { badRequestMiddleware } from './middleware/bad-requet.middleware';
const app = express();

app.use(cors());
app.use(express.json());

app.use(badRequestMiddleware);

app.use(mainRouter);

const port = process.env.PORT || 8000

app.listen(port,() => console.log(`server running on ${port}`))

