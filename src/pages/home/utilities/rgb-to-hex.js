'use strict'

function rgbToHex(rgb) {
	const [red, green, blue] = rgb
	return (
		'#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)
	)
}

export { rgbToHex }
