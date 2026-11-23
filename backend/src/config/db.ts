import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const MongoDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_URI!)

        console.log('MongoDB jalan')
    } catch(err) {
        console.log(err)
        process.exit(1)
    }
}

export default MongoDB