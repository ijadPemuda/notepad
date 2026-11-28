import dotenv from 'dotenv'
dotenv.config()
import bcrypt from 'bcrypt'
import Jwt from 'jsonwebtoken'
import { Account } from '../schema/account.js'
import { STATUS_CODES } from 'node:http'

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


export const signInService = async (payload: signInPayload) => {
    const {username, email, password, rememberMe} = payload

    const hashedPassword: string = await bcrypt.hash(password, 10)
    const newPayload: signInPayload = {
        username: username,
        email: email,
        password: hashedPassword,
        rememberMe: rememberMe
    }

    const user = await Account.insertOne(newPayload)
    return {
        ok: true,
        message: 'Berhasil Daftar!'
    }
}

export const logInService = async (payload: loginPayload) => {
    const {email, password, rememberMe} = payload

    const user = await Account.findOne({ email: email })
    if(!user) {
        throw new Error("Email atau Password Salah!")
    }

    const isMatch = await bcrypt.compare(
        password,
        user.password
    )

    if(!isMatch) {
        throw new Error("Email atau Password Salah!")
    }

    let token: any

    if(rememberMe === true) {
        token = Jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: '2w'
            }
        )
    } else {
        token = Jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: '3d'
            }
        )
    }

    return token
}