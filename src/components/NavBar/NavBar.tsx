import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import s from "./navbar.module.scss"
import Dropdown from '../Dropdown'
import DropdownItem from '../DropdownBar/DropdownItem'
import TextField from '../TextField'
import SearchIcon from '@/assets/img/SearchIcon'
import Avatar from '../Avatar'
import testImg from "@/assets/test_img/1.jpg"
import HeartIcon from '@/assets/img/HeartIcon'
import CartIcon from '@/assets/img/CartIcon'

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
            <Container className={s.navbar}>
                <div className={s.navbar__menu}>
                    <h2 className={s.menu__brand}>Funiro.</h2>

                    <Dropdown className={s.menu__item} barClassName={s.dropdown_bar} value='Products'>
                        {productsBar.map(({name,link},i)=>(
                            <DropdownItem key={`${name}_${link}_${i}`} href={link}>{name}</DropdownItem>
                        ))}
                    </Dropdown>

                    <Dropdown className={s.menu__item} barClassName={s.dropdown_bar} value='Rooms'>
                        {roomsBar.map(({name,link},i)=>(
                            <DropdownItem key={`${name}_${link}_${i}`} href={link}>{name}</DropdownItem>
                        ))}
                    </Dropdown>

                    <Link to='/inspirations' className={`${s.menu__link} ${s.menu__item}`}>Inspirations</Link>

                    <TextField
                        className={`${s.menu__search} ${s.menu__item}`}
                        icon={<SearchIcon/>}
                    />
                </div>

                <div className={s.navbar__profile}>
                    <Link to={'/liked_products'} className={`${s.profile__heart} ${s.profile__item}`}>
                            <HeartIcon/>
                    </Link>

                    <Link to={'/cart'} className={`${s.profile__cart}  ${s.profile__item}`}>
                            <CartIcon/>
                    </Link>

                    <Avatar className={`${s.profile__avatar}  ${s.profile__item}`}>
                        <img src={testImg}/>
                    </Avatar>
                </div>
            </Container>
        </>
    )
}

export default NavBar
