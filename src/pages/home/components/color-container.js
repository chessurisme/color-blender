'use strict'

import { setAttributes } from '../../../utilities/set-attributes.js'
import { ColorContainerBox01 } from './color-container-box-01.js'
import { ColorContainerBox02 } from './color-container-box-02.js'

class ColorContainer {
	constructor(config) {
		this.color = config['hex-color']
		this.type = config['type']
		this.id = config['id']
	}

	create() {
		const color_container = document.createElement('div')
		setAttributes(color_container, {
			id: `color-container-${this.id}`,
			class: 'color-container'
		})

		const initial_config = {
			'hex-color': this.color,
			'id': this.id,
			'type': this.type || undefined
		}

		const color_container_box_01 = new ColorContainerBox01(
			initial_config
		).create()
		const color_container_box_02 = new ColorContainerBox02(
			initial_config
		).create()

		color_container.appendChild(color_container_box_01)
		color_container.appendChild(color_container_box_02)
		return color_container
	}
}

export { ColorContainer }
