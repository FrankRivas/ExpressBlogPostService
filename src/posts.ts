import mongoose from 'mongoose'
import express from 'express'
import { postSchema } from '../database/schema/post'

const Post = mongoose.model('Post', postSchema)

export async function createPost(req: express.Request) {
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

export async function getPosts() {
	const posts = await Post.find()
	return posts
}

export async function getPost(id: string) {
	const post = await Post.findById(id)
	return post
}

export async function deletePost(id: string) {
	const post = await Post.deleteOne({ _id: id })
	return post
}

export async function updatePost(id: string, req: express.Request) {
	const post = await Post.findByIdAndUpdate(
		id,
		{
			$set: {
				author: `${req.body.author}`,
				title: `${req.body.title}`,
				content: `${req.body.content}`,
				tags: `${req.body.tags}`
			}
		},
		{ new: true }
	)
	return post
}
