'use strict'

function hexToRgb(hex) {
	const bigint = parseInt(hex.substring(1), 16)
	const red = (bigint >> 16) & 255
	const green = (bigint >> 8) & 255
	const blue = bigint & 255

	return [red, green, blue]
}

export { hexToRgb }
