import { Link } from 'gatsby'
import * as React from 'react'
import * as styles from "./button.module.css"

export const Button = ({ to, text }) => {
    // If internal use gatsby link
    if (to[0] === "/") {
        return (
            <Link to={to}>
                <div className={styles.button}>
                    <p>{text}</p>
                </div>
            </Link>
        )
    } else {
        return (
            <a href={to}>
                <div className={styles.button}>
                    <p>{text}</p>
                </div>
            </a>
        )
    }
}