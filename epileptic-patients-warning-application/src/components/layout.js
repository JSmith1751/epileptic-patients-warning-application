import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    navcontainer,
    heading,
} from './layout.module.css'
import NavBar from "./navbar"

const Layout = ({ pageTitle, children }) => {
    return (
        <>
        <NavBar />
        <div>
            <div className={navcontainer}>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
               
            </div>

            <main className={container}>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>

            </div>
        </>
    )
}

export default Layout