import React, { useState }  from 'react'
import ArrowIcon from "@/assets/img/ArrowDownIcon"
import s from "./dropdown.module.scss"
import DropdownBar from '../DropdownBar'

interface Props {
    children?: React.ReactNode,
    value: string,
    className?: string,
    barClassName?: string
}

function Dropdown({children,value,className,barClassName}: Props) {
    const [open,setOpen] = useState(false)

    const toggleBar = ()=>{
        setOpen(!open);
    }

    return (
        <div className={s.dropdown_wrapper}>
            <span onClick={toggleBar} className={`${s.dropdown} ${className ? className : ''}`}>
                {value} <ArrowIcon className={s.dropdown__icon}/>
            </span>

            <DropdownBar className={`${open ? s.bar_opened : s.bar_hidden } ${barClassName ? barClassName : ''}`}>
                {children}
            </DropdownBar>
        </div>
        
    )
}

export default Dropdown
