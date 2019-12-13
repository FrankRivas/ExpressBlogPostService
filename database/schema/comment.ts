import mongoose from 'mongoose'
export const commentSchema = new mongoose.Schema({
	author: { type: String, required: true },
	content: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
})
