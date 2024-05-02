'use strict'

import { Main } from '../../../layout/main.js'
import { randomHexColor } from '../utilities/random-hex-color.js'
import { ColorContainer } from '../components/color-container.js'
import { ColorData } from '../features/color-data.js'
import { colorBlend } from '../features/color-blend.js'
import { createLucideIcon } from '../../../utilities/create-lucide-icons.js'

class PageMain {
	create() {
		const main = new Main().create()

		new ColorData('color-addend', randomHexColor()).set()
		new ColorData('color-augend', randomHexColor()).set()

		const addend_config = {
			'hex-color': new ColorData('color-addend').get(),
			'id': 'addend',
			'type': 'paste'
		}

		const augend_config = {
			'hex-color': new ColorData('color-augend').get(),
			'id': 'augend',
			'type': 'paste'
		}

		const sum_config = {
			'hex-color': colorBlend([
				new ColorData('color-addend').get(),
				new ColorData('color-augend').get()
			]),
			'id': 'sum',
			'type': 'copy'
		}

		const addend = new ColorContainer(addend_config).create()
		const augend = new ColorContainer(augend_config).create()
		const divider = document.createElement('hr')
		const sum = new ColorContainer(sum_config).create()

		main.appendChild(addend)
		main.appendChild(augend)
		main.appendChild(divider)
		main.appendChild(sum)

		document.addEventListener('DOMContentLoaded', () => createLucideIcon())

		return main
	}
}

export { PageMain }
