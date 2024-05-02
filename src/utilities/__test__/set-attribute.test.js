'use strict'

import { JSDOM } from 'jsdom'
import { setAttributes } from '../set-attributes.js'

describe('setAttributes', () => {
	let original_error

	beforeEach(() => {
		original_error = console.error
		console.error = jest.fn()
		const dom = new JSDOM('<!DOCTYPE html>')

		global.window = dom.window
		global.document = window.document
		global.HTMLElement = window.HTMLElement
	})

	afterEach(() => {
		console.error = original_error
	})

	it('should set valid attributes on a valid HTML element', () => {
		const element = document.createElement('div')
		const attributes = {
			id: 'sample-div',
			class: 'container',
			style: 'color: blue;'
		}

		const result = setAttributes(element, attributes)

		expect(result).toEqual(true)
		expect(element.getAttribute('id')).toBe('sample-div')
		expect(element.getAttribute('class')).toBe('container')
		expect(element.getAttribute('style')).toBe('color: blue;')
	})

	it('should return false when element is not provided', () => {
		const attributes = {
			id: 'sample-div',
			class: 'container',
			style: 'color: red;'
		}

		const result = setAttributes(null, attributes)
		expect(result).toBe(false)
		expect(console.error).toHaveBeenCalledWith('The element must be provided.')
	})

	it('should not set attributes on a valid HTML element and an empty object', () => {
		const element = document.createElement('div')
		const attributes = {}

		const result = setAttributes(element, attributes)

		expect(result).toEqual(false)
		expect(console.error).toHaveBeenCalledWith(
			'The attributes must be provided.'
		)
	})

	it('should set attributes with special characters correctly when provided with a valid HTML element and a non-empty object', () => {
		const element = document.createElement('div')
		const attributes = {
			'data-special': 'special',
			'data-test': 'test',
			'data-123': '123'
		}

		const result = setAttributes(element, attributes)

		expect(result).toBe(true)
		expect(element.getAttribute('data-special')).toBe('special')
		expect(element.getAttribute('data-test')).toBe('test')
		expect(element.getAttribute('data-123')).toBe('123')
	})

	it('should return false if element is not a valid HTML element', () => {
		const result = setAttributes({}, { id: 'test-id' })

		expect(result).toBe(false)
		expect(console.error).toHaveBeenCalledWith(
			'The element provided is not a valid HTML element.'
		)
	})

	it('should return false if attributes are not a valid object', () => {
		const element = document.createElement('div')

		const result = setAttributes(element, 'invalid-attributes')

		expect(result).toBe(false)
		expect(console.error).toHaveBeenCalledWith(
			'The attributes provided are not a valid object.'
		)
	})
})
