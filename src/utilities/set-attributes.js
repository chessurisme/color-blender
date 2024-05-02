'use strict'

function setAttributes(element, attributes) {
	if (!element) {
		console.error('The element must be provided.')
		return false
	}

	if (!attributes || Object.keys(attributes).length === 0) {
		console.error('The attributes must be provided.')
		return false
	}

	// make a test for this
	if (!(element instanceof HTMLElement)) {
		const not_valid_element =
			'The element provided is not a valid HTML element.'
		console.error(not_valid_element)
		return false
	}

	// make a test for this
	if (typeof attributes !== 'object') {
		const not_valid_attributes =
			'The attributes provided are not a valid object.'
		console.error(not_valid_attributes)
		return false
	}

	Object.entries(attributes).forEach(([key, value]) => {
		element.setAttribute(key, value)
	})

	return true
}

export { setAttributes }
