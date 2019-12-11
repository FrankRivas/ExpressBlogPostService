import mongoose from 'mongoose'
export const commentSchema = new mongoose.Schema({
	author: String,
	content: String,
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
})
