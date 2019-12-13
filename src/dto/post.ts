import { IsString, IsOptional, IsNotEmpty } from 'class-validator'

interface PostValidator {
	author: string
	title: string
	content: string
	tags: string[]
}
export class Post {
	constructor({ author, title, content, tags }: PostValidator) {
		;(this.author = author), (this.title = title), (this.content = content), (this.tags = tags)
	}

	@IsOptional()
	@IsString()
	author: string

	@IsNotEmpty()
	@IsString()
	title: string

	@IsNotEmpty()
	@IsString()
	content: string

	@IsOptional()
	@IsString({
		each: true,
	})
	tags: string[]
}
