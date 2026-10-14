import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.Navlink} ${styles.Active}` : styles.Navlink;

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <div className={styles.Navmenu}>
                <NavLink to="/" className={linkClass}>
                    Home
                </NavLink>
                <NavLink to="/interview" className={linkClass}>
                    Interview
                </NavLink>
                <NavLink to="/notebook" className={linkClass}>
                    Notebook
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
