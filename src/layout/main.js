'use strict'

class Main {
	constructor() {
		this.main = document.createElement('main')
	}

	create() {
		return this.main
	}

	remove() {
		return this.main.remove()
	}
}

export { Main }
