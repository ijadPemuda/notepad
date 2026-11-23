import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, '../../frontend/dist')))







app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'))
})

export default app