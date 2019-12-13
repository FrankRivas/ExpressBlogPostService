import express from 'express'
import { validate, Validator } from 'class-validator'
import { Post } from '../dto/post'
import { Comment } from '../dto/comment'

export async function validBody(req: express.Request, res: express.Response, next: Function): Promise<void> {
	const post = new Post(req.body)
	const result = await validate(post, { validationError: { target: false } })
	if (result.length > 0) {
		res.status(400).send({ msg: 'Bad Request', error: result })
		res.end()
		return
	}
	next()
}

export function validContentType(req: express.Request, res: express.Response, next: Function): void {
	console.log(req.headers['content-type'])
	if (req.headers['content-type'] !== 'application/json') {
		res.status(415).send({
			msg: 'Invalid Content-Type',
			error: ['Must be application/json'],
		})
		res.end()
		return
	}
	next()
}

export function validateIdLen(req: express.Request, res: express.Response, next: Function): void {
	const validator = new Validator()
	const result = validator.isMongoId(req.params.id)
	if (!result) {
		res.status(400).send({ msg: 'Invalid format id', error: ['Must be of 24 characters'] })
		res.end()
		return
	}
	next()
}

export async function validateBodyComment(req: express.Request, res: express.Response, next: Function): Promise<void> {
	const post = new Comment(req.body)
	const result = await validate(post, { validationError: { target: false } })
	if (result.length > 0) {
		res.status(400).send({ msg: 'Bad Request', error: result })
		res.end()
		return
	}
	next()
}
