import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import s from "./navbar.module.scss"
import ArrowIcon from "@/assets/img/ArrowDownIcon"

function NavBar() {
    return (
        <>
            <Container className={s.aboba}>
                <nav>
                        <ul>
                            <li>
                                <Link to="/">
                                    <ArrowIcon/>Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                    </nav> 
            </Container>

            <Container mode='right' className={s.aboba}>
                <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                    </nav> 
            </Container>

            <Container  mode='left'  className={s.aboba}>
                <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                    </nav> 
            </Container>

        </>
    )
}

export default NavBar
