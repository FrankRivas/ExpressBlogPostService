import mongoose from 'mongoose'
import express from 'express'
import { postSchema } from '../database/schema/post'

const Post = mongoose.model('Post', postSchema)

export async function createComment(req: express.Request) {
	let post = new Post({
		author: `${req.body.author}`,
		title: `${req.body.title}`,
		content: `${req.body.content}`
	})
	if (req.body.tags) {
		post.set({
			tags: req.body.tags
		})
	}
	/*if (req.body.comments) {
		post.set({
			comments: req.body.comments
		})
	}*/
	const result = await post.save()
	return result
}
