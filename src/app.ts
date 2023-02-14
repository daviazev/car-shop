import express from 'express';

import CarRoutes from './Routes/Car';
import MotorcycleRoutes from './Routes/Motorcycle';

const app = express();
app.use(express.json());
app.use(CarRoutes);
app.use(MotorcycleRoutes);

export default app;
