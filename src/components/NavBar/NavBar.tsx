import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import s from "./navbar.module.scss"
import Dropdown from '../Dropdown'
import DropdownItem from '../DropdownBar/DropdownItem'
import TextField from '../TextField'
import SearchIcon from '@/assets/img/SearchIcon'

function NavBar() {
    const productsBar = [
        {name: 'Chairs', link:'/products/chairs'},
        {name: 'Sofas', link:'/products/sofas'},
        {name: 'Tables', link:'/products/tables'},
    ]

    const roomsBar = [
        {name: 'Office Rooms', link:'/rooms/office'},
        {name: 'House Rooms', link:'/rooms/sofas'},
        {name: 'Tables', link:'/rooms/tables'},
    ]

    return (
        <>
            <Container className={s.aboba}>
                <ul>
                    <li>
                        <Dropdown barClassName={s.dropdown_bar} value='Products'>
                            {productsBar.map((item,i)=>(
                                <DropdownItem 
                                    key={`${item}_${i}`} 
                                    href={item.link} 
                                    className={s.bar__item} 
                                >
                                    {item.name}
                                </DropdownItem>
                            ))}
                        </Dropdown>
                    </li>

                    <li>
                        <Dropdown barClassName={s.dropdown_bar} value='Rooms'>
                            {roomsBar.map((item,i)=>(
                                <DropdownItem 
                                    key={`${item}_${i}`} 
                                    href={item.link} 
                                    className={s.bar__item} 
                                >
                                    {item.name}
                                </DropdownItem>
                            ))}
                        </Dropdown>
                    </li>
                    <li>
                        <TextField
                            icon={<SearchIcon/>}
                            placeholder="Search for minimalist chair"
                        />
                    </li>
                </ul>
            </Container>

        </>
    )
}

export default NavBar
