import { randomHexColor } from '../random-hex-color.js'

describe('randomHexColor function', () => {
	it('should generate a valid hex color', () => {
		const hexColor = randomHexColor()

		const hexPattern = /^#[0-9a-fA-F]{6}$/

		expect(hexColor).toMatch(hexPattern)
	})

	it('should generate unique colors', () => {
		const colors = new Set()

		for (let i = 0; i < 1000; i++) {
			colors.add(randomHexColor())
		}

		expect(colors.size).toEqual(1000)
	})
})
