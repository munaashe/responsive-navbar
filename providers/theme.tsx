import React, { ReactNode, useEffect, useMemo, useState } from 'react';

type ThemeType = 'light' | 'dark';
export const ThemeContext = React.createContext<
    | {
        theme: 'light' | 'dark';
        setDarkTheme: () => void;
        setLightTheme: () => void;
        setSystemTheme: () => void;
    }
    | undefined
>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState<ThemeType>('light');

    useEffect(() => {
        setMounted(true);
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        } else {
            setTheme('light');
            document.documentElement.classList.remove('dark');
        }
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = ({ matches }: MediaQueryListEvent) => {
            if (!('theme' in localStorage)) {
                setTheme(matches ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', matches);
            }
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const setDarkTheme = () => {
        localStorage.theme = 'dark';
        setTheme('dark');
        document.documentElement.classList.add('dark');
    };

    const setLightTheme = () => {
        localStorage.theme = 'light';
        setTheme('light');
        document.documentElement.classList.remove('dark');
    };

    const setSystemTheme = () => {
        localStorage.removeItem('theme');
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        } else {
            setTheme('light');
            document.documentElement.classList.remove('dark');
        }
    };

    const value = useMemo(
        () => ({
            theme,
            setDarkTheme,
            setLightTheme,
            setSystemTheme,
        }),
        [theme]
    );

    if (!mounted) {
        return null;
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;