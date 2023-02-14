import express from 'express';

import CarRoutes from './Routes/Car';

const app = express();
app.use(express.json());
app.use(CarRoutes);

export default app;
