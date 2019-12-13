import { IsString, IsNotEmpty } from 'class-validator'

interface CommentValidator {
	author: string
	content: string
}
export class Comment {
	constructor({ author, content }: CommentValidator) {
		;(this.author = author), (this.content = content)
	}

	@IsNotEmpty()
	@IsString()
	author: string

	@IsNotEmpty()
	@IsString()
	content: string
}
