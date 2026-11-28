import dotenv from 'dotenv'
dotenv.config()
import type { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";

const LoginVerify = (req: Request, res: Response, next: NextFunction) => {
    const authHeader: string | undefined = req.headers.authorization

    if (!authHeader) {
        return next()
    }

    const currentEmail: string | undefined = req.body.currentEmail
    const email: string = req.body.email

    if (currentEmail === email) {
        try {
            const decoded = Jwt.verify(authHeader, process.env.JWT_SECRET!)

            return res.status(400).json({
                message: "Anda Sudah Login"
            })
        } catch (err: any) {
            if(err.name === "TokenExpiredError") {
                return next()
            }
        }
    }

    return next()
}

export default LoginVerify