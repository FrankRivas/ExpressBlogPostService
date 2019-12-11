import mongoose from 'mongoose'
export function conectDB() {
	try {
		mongoose.connect('mongodb://localhost/BlogAPI')
	} catch {
		console.log('Error')
	}
}
