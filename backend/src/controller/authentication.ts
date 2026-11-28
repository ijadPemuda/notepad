import type { Request, Response } from "express";
import { signInService, logInService } from '../services/authentication.js'

type signInPayload = {
    username: string,
    email: string,
    password: string,
    rememberMe: boolean
}

type loginPayload = {
    email: string,
    password: string,
    rememberMe: boolean
}

export const signInController = async (req: Request<{}, {}, signInPayload>, res: Response) => {
    const payload = req.body

    try {
        const response = await signInService(payload)

        if(response.ok) {
            return res.status(200).json({
                message: 'Berhasil Daftar'
            })
        }
    }catch(err) {
        return res.status(500).json({
            message: 'Kesalahan Internal Server'
        })
    }
}

export const logInController = async (req: Request<{}, {}, loginPayload>, res: Response) => {
    const payload = req.body

    try {
        const response = await logInService(payload)

        if(response.ok) {
            return res.status(200).json({
                message: 'Berhasil Login'
            })
        }
    }catch(err) {
        return res.status(500).json({
            message: 'Kesalahan Internal Server'
        })
    }
}