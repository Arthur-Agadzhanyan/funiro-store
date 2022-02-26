import React, { JSXElementConstructor, useEffect, useRef, useState }  from 'react'
import ArrowIcon from "@/assets/img/ArrowDownIcon"
import s from "./dropdown.module.scss"
import DropdownBar from '../DropdownBar'
import { closeIfClickAnywhere } from '@/utils/close_when_click'

interface Props {
    children: React.ReactNode,
    value: string,
    className?: string,
    barClassName?: string
}

function Dropdown({children,value,className='',barClassName}: Props) {
    const [open,setOpen] = useState(false)
    const dropdown = useRef<HTMLDivElement>(null)

    const toggleBar = ()=>{
        setOpen(!open);
    }

    useEffect(()=>{
        // close the list when you click anywhere on the screen
        closeIfClickAnywhere(dropdown,open,setOpen)
    })

    return (
        <div ref={dropdown} className={s.dropdown_wrapper}>
            <span onClick={toggleBar} className={`${s.dropdown} ${className}`}>
                {value} <ArrowIcon className={`${s.dropdown__icon} ${open ? s.icon_rotate : ''}`}/>
            </span>

            <DropdownBar className={`${open ? s.bar_opened : s.bar_hidden } ${barClassName ? barClassName : ''}`}>
                {children}
            </DropdownBar>
        </div>
        
    )
}

export default Dropdown
