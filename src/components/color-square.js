'use strict'

import { setAttributes } from '../utilities/set-attributes.js'

class ColorSquare {
	constructor(config) {
		this.color = config['hex-color']
		this.id = config['id']
	}

	create() {
		const square = document.createElement('div')
		setAttributes(square, {
			id: this.id,
			class: 'color-square',
			style: `background-color: ${this.color}; height: 50px; width: 50px`
		})

		return square
	}
}

export { ColorSquare }
