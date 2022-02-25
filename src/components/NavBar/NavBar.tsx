import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import s from "./navbar.module.scss"
import Dropdown from '../Dropdown'
import DropdownItem from '../DropdownBar/DropdownItem'

function NavBar() {

    const productsBar = [
        {name: 'Chairs', link:'/products/chairs'},
        {name: 'Sofas', link:'/products/sofas'},
        {name: 'Tables', link:'/products/tables'},
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
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </Container>

        </>
    )
}

export default NavBar
