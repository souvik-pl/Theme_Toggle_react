import { ReactNode, createContext, useEffect, useState } from "react";

export type ThemeContextProps = {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

type ThemeProviderProps = {
    children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

function ThemeContextProvider(props: ThemeProviderProps) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.add("light");
    }, [])

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
        document.body.classList.toggle("dark");
    };

    const contextValues: ThemeContextProps = {
        isDarkMode,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={contextValues}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
