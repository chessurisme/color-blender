'use strict'

import { setAttributes } from '../../../utilities/set-attributes.js'
import { ColorName } from '../../../components/color-name.js'
import { ColorInput } from '../../../components/color-input.js'
import { ColorButton } from '../../../components/color-button.js'

class ColorContainerBox02 {
	constructor(config) {
		this.config = config || {}
		this.id = config['id']
		this.type = config['type']
		this.color = config['hex-color']
	}

	create() {
		const config_for_name_and_input = {
			'id': this.id,
			'hex-color': this.color
		}

		const config_for_button = {
			id: this.id,
			type: this.type
		}

		const box = document.createElement('div')
		setAttributes(box, {
			class: 'color-box-02 color-box',
			id: `color-box-02-${this.id}`
		})

		const another_box = document.createElement('div')

		const color_name = new ColorName(config_for_name_and_input).create()
		const color_input = new ColorInput(config_for_name_and_input).create()
		const color_button = new ColorButton(config_for_button).create()

		another_box.appendChild(color_name)
		another_box.appendChild(color_input)
		another_box.appendChild(color_button)
		box.appendChild(another_box)

		return box
	}
}

export { ColorContainerBox02 }
