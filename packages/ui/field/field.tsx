import { ReactNode } from 'react'

interface FieldProps {
    id?: string
    caption?: ReactNode
    label?: ReactNode
    hint?: ReactNode
    children: ReactNode
}

export function Field({ id, label, children }: FieldProps) {
    return (
        <div className="field">
            {label && (
                <label htmlFor={id} className="label field-label">
                    {label}
                </label>
            )}
            <div className="field-control">{children}</div>
        </div>
    )
}
