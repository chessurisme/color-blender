'use strict'

import { PageHeader } from './layout/header.js'
import { PageMain } from './layout/main.js'

class Home {
	create() {
		const header = new PageHeader().create()
		const main = new PageMain().create()

		const fragment = new DocumentFragment()

		fragment.appendChild(header)
		fragment.appendChild(main)

		return fragment
	}
}

export { Home }
