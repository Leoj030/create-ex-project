import express from 'express';
import helmet from 'helmet';
import rateLimiter from './config/limiter.config.js'
import getterRoute from './routes/getter.route.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(rateLimiter);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// register the routes defined in getterRoute.
app.use('/', getterRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});