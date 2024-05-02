'use strict'

import { setAttributes } from '../../../utilities/set-attributes.js'
import { ColorSquare } from '../../../components/color-square.js'

class ColorContainerBox01 {
	constructor(config) {
		this.config = config || {}
		this.id = config['id']
	}

	create() {
		const box = document.createElement('div')
		setAttributes(box, {
			class: 'color-box-01 color-box',
			id: `color-box-01-${this.id}`
		})

		const color_square = new ColorSquare(this.config).create()

		box.appendChild(color_square)

		return box
	}
}

export { ColorContainerBox01 }
