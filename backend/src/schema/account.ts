import mongoose from "mongoose";

const account = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    notes: [
        new mongoose.Schema({
            ownerId: {
                type: String,
                unique: true
            },

            title: {
                type: String
            },

            file: {
                type: String
            },

            createdAt: {
                type: Date
            }
        })
    ]
}, {
    collection: 'account'
})

export const Account = mongoose.model('account', account)