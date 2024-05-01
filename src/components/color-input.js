'use strict'

import { setAttributes } from '../utilities/set-attributes.js'

class ColorInput {
	constructor(config) {
		this.config = config || {}
		this.id = config['id']
		this.color = config['hex-color']
	}

	create() {
		const color_input = document.createElement('input')
		setAttributes(color_input, {
			type: 'text',
			placeholder: '#000000',
			id: `color-input-${this.id}`,
			class: 'color-input',
			value: this.color
		})

		return color_input
	}
}

export { ColorInput }
