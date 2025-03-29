import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import exampleRoutes from './routes/example';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 6000;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/example', exampleRoutes);

// Server Start
app.listen(port, () => console.log(`Server running on port ${port}`));