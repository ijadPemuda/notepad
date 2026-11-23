import dotenv from 'dotenv'
import app from "./app.js";

dotenv.config()

const PORT = process.env.PORT

import MongoDB from "./config/db.js";

MongoDB()

app.listen(PORT, () => (
    console.log('Server Jalan')
))