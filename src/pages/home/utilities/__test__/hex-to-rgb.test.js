'use strict'

import { hexToRgb } from '../hex-to-rgb.js'

describe('hexToRgb function', () => {
	it('should convert hex to RGB', () => {
		const hex = '#FF0000'
		const expectedRgb = [255, 0, 0]

		expect(hexToRgb(hex)).toEqual(expectedRgb)
	})

	it('should handle lowercase hex', () => {
		const hex = '#00ff00'
		const expectedRgb = [0, 255, 0]

		expect(hexToRgb(hex)).toEqual(expectedRgb)
	})

	it('should handle shorthand hex', () => {
		const hex = '#000'
		const expectedRgb = [0, 0, 0]

		expect(hexToRgb(hex)).toEqual(expectedRgb)
	})
})
