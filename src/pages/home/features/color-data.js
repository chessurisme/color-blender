'use strict'

class ColorData {
	constructor(id, hex_color) {
		this.id = id
		this.color = hex_color
	}

	set() {
		return localStorage.setItem(`color-${this.id}`, this.color)
	}

	get() {
		return localStorage.getItem(`color-${this.id}`)
	}

	remove() {
		return localStorage.removeItem(`color-${this.id}`)
	}
}

export { ColorData }
