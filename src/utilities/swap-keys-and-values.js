'use strict'

function swapKeysAndValues(object) {
	const swapped = {}

	for (const key in object) {
		const value = object[key]

		swapped[value] = key
	}

	return swapped
}

export { swapKeysAndValues }
