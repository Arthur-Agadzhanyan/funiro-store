import React from 'react'
import s from "./dropdown-bar.module.scss"

interface Props {
    className?: string,
    children: React.ReactNode
}

function DropdownBar({children,className=''}: Props) {
    return (
        <div
            className={`${s.dropdown_bar} ${className}`}
        >
            {children}
        </div>
    )
}

export default DropdownBar
