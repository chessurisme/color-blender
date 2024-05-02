'use strict'

import { setAttributes } from '../utilities/set-attributes'

class ColorButton {
	constructor(config) {
		this.config = config || {}
		this.id = config['id']
		this.type = config['type']
	}

	create() {
		const button = document.createElement('div')
		setAttributes(button, {
			class: 'button',
			style: 'cursor: pointer'
		})

		const icon_container = document.createElement('i')

		if (this.type === 'paste') {
			setAttributes(button, {
				id: `paste-button-${this.id}`,
				class: 'paste-button button'
			})

			setAttributes(icon_container, {
				'data-lucide': 'clipboard-paste'
			})

			button.addEventListener('click', this._paste.bind(this))
		}

		if (this.type === 'copy') {
			setAttributes(button, {
				id: `copy-button-${this.id}`,
				class: 'copy-button button'
			})

			setAttributes(icon_container, {
				'data-lucide': 'copy'
			})

			button.addEventListener('click', this._copy.bind(this))
		}

		button.appendChild(icon_container)

		return button
	}

	_paste() {
		navigator.clipboard
			.readText()
			.then((text) => {
				let color_input = document.getElementById(`color-input-${this.id}`)
				if (!text.startsWith('#')) {
					text = `#${text}`
				}

				console.log('Paste: ' + text)
				color_input.value = text
			})
			.catch((err) => {
				console.error('Failed to read clipboard contents: ', err)
			})
	}

	_copy() {
		const color_input_value = document.getElementById(
			`color-input-${this.id}`
		).value

		navigator.clipboard
			.writeText(color_input_value)
			.then(() => {
				console.log('Text copied to clipboard:', color_input_value)
			})
			.catch((err) => {
				console.error('Failed to copy: ', err)
			})
	}
}

export { ColorButton }
