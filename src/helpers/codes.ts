// Next Feature  (Coming Soon)//
/*
import express from 'express'

enum codes {
	'OK' = 200,
	'CREATED' = 201,
	'NO CONTENT' = 204,
	'BAD REQUEST' = 400,
	'UNAUTHORIZED' = 401,
	'FORBIDDEN' = 403,
	'NOT FOUND' = 404,
	'METHOD NOT ALLOWED' = 405,
	'CONFLICT' = 409,
	'INTERNAL SERVER ERROR' = 500,
	'SERVIDE UNAVAILABLE' = 503,
}

export function obtainDataCode(res: express.Response, code: number, jsonData?: any): void {
	res.writeHead(code, { 'Content-type': 'application/json' })
	if (jsonData !== undefined) {
		res.write(JSON.stringify(jsonData))
	} else {
		res.write(JSON.stringify({ code: code, msg: `${codes[code]}` }))
	}
}
*/
