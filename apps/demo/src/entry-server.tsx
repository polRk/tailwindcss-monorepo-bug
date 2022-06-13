import { renderToString } from 'react-dom/server'
import { App } from './app'

export async function render() {
    return renderToString(<App />)
}
