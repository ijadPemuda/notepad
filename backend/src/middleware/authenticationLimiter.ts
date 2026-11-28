import rateLimit from "express-rate-limit"

const authenticationLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 50,
    message: {
        message: 'Terlalu banyak request. Coba lagi nanti.'
    },
    standardHeaders: 'draft-8',
    legacyHeaders: false
})

export default authenticationLimiter