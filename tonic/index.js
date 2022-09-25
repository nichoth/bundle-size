import Tonic from '@socketsupply/tonic'

class TheApp extends Tonic {
    constructor () {
        super()
        this.state = { hello: 'world' }
    }

    hello (arg) {
        this.state.hello = arg
        this.reRender()
    }

    async render () {
        return this.html`<div>
            <p>Hello, ${this.state.hello}</p>
        </div>`
    }
}

Tonic.add(TheApp)
