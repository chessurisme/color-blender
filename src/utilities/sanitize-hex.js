'use strict'

function sanitizeHex(unsanitized_hex) {
	let sanitized_hex = unsanitized_hex
	const hash = /^#?/
	const three_or_six = /([0-9A-F]{3}|[0-9A-F]{6})$/i

	if (!unsanitized_hex) {
		return console.error('No hex to sanitize!')
	}

	if (typeof unsanitized_hex !== 'string') {
		return console.error('Oh! Why you do that?')
	}

	if (!three_or_six.test(unsanitized_hex)) {
		return console.error(
			"You include some invalid character. Only 0 to 9 and 'a' to 'F' are valid."
		)
	}

	if (!hash.test(unsanitized_hex)) {
		sanitized_hex = `#${unsanitized_hex}`
	}

	return console.log(sanitized_hex.toLowerCase())
}

// export { sanitizeHex }

sanitizeHex('#303030')
sanitizeHex('#333')
sanitizeHex('d33')
sanitizeHex('4a2')
sanitizeHex('2023ac')
sanitizeHex('#EABC12')
sanitizeHex('D7FC1B')
sanitizeHex('SQC')
sanitizeHex('#xassas')
sanitizeHex()
sanitizeHex('#sag')
sanitizeHex('')
sanitizeHex(null)
sanitizeHex(false)
sanitizeHex(undefined)
sanitizeHex('#eeee')
sanitizeHex('#4523')
