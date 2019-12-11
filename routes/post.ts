import express from 'express'
import {
	createPost,
	getPosts,
	getPost,
	deletePost,
	updatePost
} from '../src/posts'
import { createComment } from '../src/comment'
import bodyParser from 'body-parser'
export const routerPost = express.Router()
routerPost.use(express.json())

routerPost.get('/', async (req, res) => {
	const result = await getPosts()
	res.status(200).send(result)
})

routerPost.post('/', async (req, res) => {
	const result = await createPost(req)
	res.status(200).send(result)
})

routerPost.get('/:id', async (req, res) => {
	const result = await getPost(req.params.id)
	res.status(200).send(result)
})

routerPost.delete('/:id', async (req, res) => {
	const result = await deletePost(req.params.id)
	res.status(200).send(result)
})

routerPost.put('/:id', async (req, res) => {
	const result = await updatePost(req.params.id, req)
	res.status(200).send(result)
})

routerPost.post('/:id/comments', async (req, res) => {
	const result = await createComment(req)
	res.status(200).send(result)
})
