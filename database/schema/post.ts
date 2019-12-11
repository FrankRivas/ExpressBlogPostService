import mongoose from 'mongoose'
import { commentSchema } from './comment'
export const postSchema = new mongoose.Schema({
	author: { type: String, required: true },
	title: { type: String, required: true },
	content: { type: String, required: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now },
	tags: { type: [String], required: false },
	comments: { type: [commentSchema], required: false }
})
