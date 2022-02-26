import React from 'react'
import s from "./avatar.module.scss"

interface Props {
    children: React.ReactNode,
    className: string
}

function Avatar({children,className=''}: Props) {
    return (
        <div className={`${s.avatar} ${className}`}>
            {children}
        </div>
    )
}

export default Avatar
