import mongoose from 'mongoose'
import express from 'express'
import { commentSchema } from '../../database/schema/comment'
import { postSchema } from '../../database/schema/post'

const Post = mongoose.model('Post', postSchema)
const Comment = mongoose.model('Comment', commentSchema)

export async function createComment(req: express.Request): Promise<mongoose.Document | undefined> {
	console.log('id', req.params.id)
	console.log('from view', req.body.id)

	const comment = new Comment({
		author: `${req.body.author}`,
		content: `${req.body.content}`,
	})
	console.log('comment', comment)
	const post = await Post.findById(req.params.id)
	console.log('post', post)
	if (post) {
		await Post.update({ _id: post._id }, { $push: { comments: comment } })
		return comment
	}
}

export async function getComment(id: string): Promise<mongoose.Document[] | undefined> {
	console.log(id)
	const post = await Post.aggregate([{ $unwind: '$comments' }, { $match: { _id: '5df2ab907633b4315c9c2828' } }])
	if (post !== null) {
		return post
	}
}
