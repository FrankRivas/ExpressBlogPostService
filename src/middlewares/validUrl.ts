import express from 'express'
export function validUrl(
	req: express.Request,
	res: express.Response,
	next: Function
) {
	next()
}
