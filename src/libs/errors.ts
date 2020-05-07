class EmptyMessage extends Error {
	name: string
	file: any 
	status: Number
	constructor(file = null) {
		super('\x1b[31m'+'Failed to send Request: Cannot send an empty message and/or embed.'+'\x1b[0m')
		this.name = this.constructor.name
		this.file = file
		this.status = 50006
	}
	statusCode() {
		return this.status
	}
}
class InvalidWebhook extends Error {
	name: string
	file: any
	status: Number
	constructor(file = null) {
		super('\x1b[31m'+'Failed to send Request: You either did not provide a webhook or the providied webhook is not valid.'+'\x1b[0m')
		this.name = this.constructor.name
		this.file = file
		this.status = 404
	}
	statusCode() {
		return this.status
	}
}
export {
	EmptyMessage,
	InvalidWebhook
}