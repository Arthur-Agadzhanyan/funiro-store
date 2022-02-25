import React from 'react'
import s from "./dropdown-item.module.scss"

interface Props {
    className?: string,
    children: React.ReactNode,
    href?: string
}

function DropdownItem({children,className,href}: Props) {
    if(href){
        return (
            <a href={href} className={`${s.dropdown_item} ${className ? className : ''}`}>
                {children}
            </a>
        )
    }

    return (
        <div className={`${s.dropdown_item} ${className ? className : ''}`}>
            {children}
        </div>
    )
}

export default DropdownItem
