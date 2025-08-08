import rateLimit from 'express-rate-limit';

export default rateLimit({
    windowMs: 15 * 60 * 1000, // rate limit set to 15 minutes
    max: 100, // rate limits to 100
    standardHeaders: true,
    legacyHeaders: false,
});