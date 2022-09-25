import { render } from 'preact';
import { html } from 'htm/preact';
import { useState } from 'preact/hooks';

function Hello () {
    const [target, setTarget] = useState('world')
    return html`<p>Hello, ${target}</p>`
}

render(html`<${Hello} />`, document.body);
