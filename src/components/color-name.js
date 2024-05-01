'use strict'

import color_json from '../assets/color-names.min.json'
import nearest_color from 'nearest-color'
import { swapKeysAndValues } from '../utilities/swap-keys-and-values.js'
import { setAttributes } from '../utilities/set-attributes.js'

class ColorName {
	constructor(config) {
		this.color = config['hex-color']
		this.id = config['id']
		this.nearest_color = nearest_color.from(swapKeysAndValues(color_json))
	}

	create() {
		const name_holder = document.createElement('p')
		setAttributes(name_holder, {
			class: 'color-name',
			id: `color-name-${this.id}`
		})

		let color_name = 'Unknown'

		if (this.color.startsWith('#')) {
			this.color = this.color.slice(1)
		}

		if (color_json[this.color]) {
			color_name = color_json[this.color]
		}

		if (color_name === 'Unknown') {
			color_name = this.nearest_color(this.color).name
		}

		name_holder.textContent = color_name

		return name_holder
	}
}

export { ColorName }
