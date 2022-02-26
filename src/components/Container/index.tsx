import React from 'react'
import s from './container.module.scss'

interface Props {
    children: React.ReactNode,
    mode?: 'left' | 'right',
    className?: string
}

function Container({children,mode,className=''}: Props) {
    const containerWithMods = ()=>{
        return mode && (mode == 'left' ? s.container_left : s.container_right)
    }

    return (
        <div className={`${s.container} ${containerWithMods()} ${className}`}>
            {children}
        </div>
    )
}

export default Container
