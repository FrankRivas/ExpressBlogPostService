import express from 'express'
import { createPost, getPosts, getPost, deletePost, updatePost } from '../src/services/posts'
import { commentRouter } from './comment'
import { validBody, validateIdLen } from '../src/middlewares/validations'

export const routerPost = express.Router()

routerPost.use(express.json())

routerPost.get('/', async (req, res) => {
	const result = await getPosts()
	res.status(200).send(result)
	res.end()
})

routerPost.post('/', validBody, async (req, res) => {
	const result = await createPost(req)
	const code = result ? 201 : 500
	res.status(code).send(result)
	res.end()
})

routerPost.get('/:id', validateIdLen, async (req, res) => {
	const result = await getPost(req.params.id)
	const code = result !== undefined ? 200 : 404
	result !== undefined
		? res.status(code).send(result)
		: res.status(code).send({ msg: 'Not Found', error: ['Invalid Id'] })
	res.end()
})

routerPost.delete('/:id', validateIdLen, async (req, res) => {
	const result = await deletePost(req.params.id)
	const code = result.n > 0 ? 204 : 404
	result.n > 0 ? res.status(code) : res.status(code).send({ msg: 'Not Found', error: ['Invalid Id'] })
	res.end()
})

routerPost.put('/:id', validateIdLen, validBody, async (req, res) => {
	const result = await updatePost(req.params.id, req)
	console.log(result)
	const code = result !== undefined ? 200 : 404
	result !== undefined
		? res.status(code).send(result)
		: res.status(code).send({ msg: 'Not Found', error: ['Invalid Id'] })
	res.end()
})

routerPost.use('/:id/comments', validateIdLen, commentRouter)
