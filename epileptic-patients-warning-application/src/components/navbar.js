import React from "react"
import {
    navLinks,
    navLinkItem,
    navLinkItemRight,
    navLinkText,
    navimg,
    navContainer
} from './layout.module.css'
import user from "../images/user.png"
import { Link, navigate } from "gatsby"
import {
    getUser, isLoggedIn, logout, isAuthed} from "../services/auth"


export default function NavBar() {
    let greetingMessage = ""
    if (isLoggedIn()) {
        greetingMessage = `Hello ${getUser().firstname}`
    } else {
        greetingMessage = "You are not logged in"
    }
    return (
        <nav>
            <div className={navContainer}>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        
                        {isLoggedIn() ? (
                            <a
                                href="/"
                                onClick={event => {
                                    event.preventDefault()
                                    navigate(`/app/profile`)
                                }}
                            >
                                <img className={navimg} src={user} alt="icon"></img>
                            </a>
                        ) : 
                            
                            <Link to="/app/login">
                                <img className={navimg} src={user} alt="icon"></img>
                            </Link>}
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/search" className={navLinkText}>
                            Search
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        {isAuthed() ? (
                            <a
                                href="/"
                                onClick={event => {
                                    event.preventDefault()
                                    navigate(`/app/patients`)
                                }}
                            >
                                Patients
                            </a>
                        ) : null}
                    </li>
                    <li className={navLinkItemRight}>
                        <span className={navLinkText}>{greetingMessage}</span>
                    </li>

                    <li className={navLinkItemRight}>
                        {isLoggedIn() ? (
                            <a
                                href="/"
                                onClick={event => {
                                    event.preventDefault()
                                    navigate(`/app/profile`)
                                }}
                            >
                                Profile
                            </a>
                        ) : null}
                    </li>

                    <li className={navLinkItemRight}>
                        {isLoggedIn() ? (
                            <a
                                href="/"
                                onClick={event => {
                                    event.preventDefault()
                                    logout(() => navigate(`/app/login`))
                                }}
                            >
                                Logout
                            </a>
                        ) : null}
                    </li>

                </ul>
            </div>
            </nav>
    )
}