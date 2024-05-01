'use strict'

class Header {
	constructor() {
		this.header = document.createElement('header')
	}

	create() {
		return this.header
	}

	remove() {
		return this.header.remove()
	}
}

export { Header }
