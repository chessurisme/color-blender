'use strict'

import { hexToRgb } from '../utilities/hex-to-rgb.js'
import { rgbToHex } from '../utilities/rgb-to-hex.js'

function colorBlend(hex_colors) {
	const color_1 = hexToRgb(hex_colors[0])
	const color_2 = hexToRgb(hex_colors[1])

	const blended_rgb = color_1.map((color, i) =>
		Math.round((color + color_2[i]) / 2)
	)
	const blend_color = rgbToHex(blended_rgb)

	return blend_color
}

export { colorBlend }
