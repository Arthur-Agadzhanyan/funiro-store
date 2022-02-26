import React, { ChangeEventHandler, MouseEventHandler } from 'react'
import s from './text-input.module.scss'

interface Props {
    placeholder?: string,
    value?: string,
    className?: string,
    icon?: React.ReactNode,
    iconClass?: string,
    inputClass?: string,
    iconClicked?: MouseEventHandler<HTMLDivElement>,
    onChange?: ChangeEventHandler<HTMLInputElement>
}

function TextInput({icon, placeholder,className='',value,iconClass='',inputClass='',iconClicked, onChange}: Props) {
    return (
        <div className={`${s.text_field} ${className}`}>
            {icon && <div className={`${s.field__icon} ${iconClass}`} onClick={iconClicked}>{icon}</div>}
            <input 
                type="text"
                className={`${s.field__input} ${inputClass} ${icon ? "" : s.without_icon}`}
                value={value ? value : value} 
                onChange={onChange}
                placeholder={placeholder} 
            />
        </div>
    )
}

export default TextInput
