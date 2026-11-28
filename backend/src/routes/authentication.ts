import express from "express";

import LoginVerify from "../middleware/login.js";

const signInRoute = express.Router()
const logInRoute = express.Router()

signInRoute.get('/authentication/signin',)
logInRoute.get('/authentication/login',LoginVerify)

export { signInRoute, logInRoute }