import styles from "./Navbar.module.css";
import lightModeIcon from "../assets/light.svg";
import darkModeIcon from "../assets/dark.svg";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContextProvider/ThemeContextProvider";

function Navbar() {
    const { isDarkMode, toggleTheme } = useContext<any>(ThemeContext);

    return (
        <>
            <h1 className={styles.header}>Welcome to this App</h1>
            <img
                className={styles.themeBtn}
                tabIndex={0}
                role="button"
                src={isDarkMode ? lightModeIcon : darkModeIcon}
                onClick={toggleTheme}
            />
        </>
    )
}

export default Navbar;
