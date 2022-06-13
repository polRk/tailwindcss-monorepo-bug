import { Field } from '@betteraskbot/ui'
import './index.css'

export function App() {
    return (
        <div>
            <h1>Demo</h1>
            <Field label="Email">
                <input type="email" />
            </Field>
        </div>
    )
}
