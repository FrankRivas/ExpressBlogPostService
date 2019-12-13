import mongoose from 'mongoose'
export function conectDB(): void {
	try {
		mongoose.connect('mongodb://localhost/BlogAPI')
	} catch {
		console.log('Error')
	}
}
