'use strict'

import { rgbToHex } from '../rgb-to-hex.js'

describe('rgbToHex function', () => {
	it('should convert RGB to hex', () => {
		const rgb = [255, 0, 0]
		const expectedHex = '#ff0000'

		expect(rgbToHex(rgb)).toEqual(expectedHex)
	})

	it('should handle RGB with values less than 10', () => {
		const rgb = [0, 9, 255]
		const expectedHex = '#0009ff'

		expect(rgbToHex(rgb)).toEqual(expectedHex)
	})
})
