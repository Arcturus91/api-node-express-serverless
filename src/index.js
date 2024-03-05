import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';

import { routes as userRoutes } from './user/route';

const app = express();

app.use(cors());
app.use(json());

app.use('/user',userRoutes)

export default app;