import mongoose from 'mongoose'
import express from 'express'
import { postSchema } from '../../database/schema/post'

const Post = mongoose.model('Post', postSchema)

export async function createPost(req: express.Request): Promise<mongoose.Document> {
	const post = new Post({
		author: `${req.body.author}`,
		title: `${req.body.title}`,
		content: `${req.body.content}`,
	})
	if (req.body.tags) {
		post.set({
			tags: req.body.tags,
		})
	}
	const result = await post.save()
	return result
}

export async function getPosts(): Promise<mongoose.Document[] | undefined> {
	const posts = await Post.find().sort({ createdAt: -1 })
	if (posts !== null) {
		return posts
	}
}

export async function getPost(id: string): Promise<mongoose.Document | undefined> {
	const post = await Post.findById(id)
	if (post !== null) {
		return post
	}
}

export async function deletePost(id: string): Promise<Record<string, any>> {
	const post = await Post.deleteOne({ _id: id })
	console.log(post)
	return post
}

export async function updatePost(id: string, req: express.Request): Promise<mongoose.Document | undefined> {
	const post = await Post.findByIdAndUpdate(
		id,
		{
			$set: {
				author: `${req.body.author}`,
				title: `${req.body.title}`,
				content: `${req.body.content}`,
				tags: `${req.body.tags}`,
			},
		},
		{ new: true },
	)
	if (post !== null) {
		return post
	}
}
