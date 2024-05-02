'use strict'

import { Home } from './pages/home/home.js'

class App {
	initialize() {
		const home = new Home().create()
		document.body.appendChild(home)
	}
}

new App().initialize()
