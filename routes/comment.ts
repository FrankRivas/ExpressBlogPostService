import express from 'express'
import { createComment } from '../src/services/comment'
import { validateBodyComment } from '../src/middlewares/validations'
export const commentRouter = express.Router({ mergeParams: true })
commentRouter.use(express.json())

commentRouter.post('/', validateBodyComment, async (req, res) => {
	const result = await createComment(req)
	const code = result ? 201 : 500
	res.status(code).send(result)
	res.end()
})

// Next Feature //
/*
commentRouter.get('/:idComment', validateIdLen, async (req, res) => {
	const result = await getComment(req.params.idComment)
	const code = result !== undefined ? 200 : 404
	res.status(code).send(result)
})*/
