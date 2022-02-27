import React, { useState } from 'react'
import s from './button.module.scss'

interface Props {
    children: React.ReactNode
    className?: string,
    mainColor?: string,
    secondaryColor?: string,
    variant?: 'contained' | "outlined"
}

const containedButtonStyle = (hover: boolean, mainColor: string, secondaryColor: string) => ({
    color: hover ? mainColor : secondaryColor,
    background: hover ? secondaryColor : mainColor,
    border: `1px solid ${mainColor}`
})

const outlinedButtonStyle = (hover: boolean, mainColor: string, secondaryColor: string) => ({
    color: hover ? secondaryColor : mainColor,
    background: hover ? mainColor : 'transparent',
    border: `1px solid ${mainColor}`
})

function Button({ children, className = '', mainColor = '#E89F71', secondaryColor = '#fff', variant = 'contained' }: Props) {
    const [hover, setHover] = useState(false);

    return (
        <button
            style={variant === "outlined" ? outlinedButtonStyle(hover, mainColor, secondaryColor) : containedButtonStyle(hover, mainColor, secondaryColor)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}

            className={`${s.button} ${className}`}
        >{children}</button>
    )
}

export default Button
