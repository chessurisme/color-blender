'use strict'

import { Header } from '../../../layout/header.js'

class PageHeader {
	create() {
		const header = new Header().create()
		const logo_container = document.createElement('img')

		return header
	}
}

export { PageHeader }
