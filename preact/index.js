import { render } from 'preact';
import { html } from 'htm/preact';
// we're not really using `useEffect` here. It is included just to get
//   a comparable bundle size
import { useState, useEffect } from 'preact/hooks';

function Hello () {
    const [target, setTarget] = useState('world')
    useEffect(() => {
        setTarget('earth')
    }, [])

    return html`<p>Hello, ${target}</p>`
}

render(html`<${Hello} />`, document.body);
