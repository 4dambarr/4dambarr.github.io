import { Link } from "gatsby"
import React from "react"
import * as styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.navholder}>
            <Link to="/">
                <div className={styles.navitem}>
                    <p className={styles.navlink}>Home</p>
                </div>
            </Link>
            <Link to="/projects">
                <div className={styles.navitem}>
                    <p className={styles.navlink}>Projects</p>
                </div>
            </Link>
            <Link to="/blog">
                <div className={styles.navitem}>
                    <p className={styles.navlink}>Blog</p>
                </div>
            </Link>
            <Link to="/contact">
                <div className={styles.navitem}>
                    <p className={styles.navlink}>Contact</p>
                </div>
            </Link>
        </div>
    )
}

export default Navbar