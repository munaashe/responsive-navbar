"use client";

import { ReactNode } from "react";
import LayoutProvider from "./layout";
import ThemeProvider from "./theme";

interface ProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
    return (
        <ThemeProvider>
            <LayoutProvider>
                {children}
            </LayoutProvider>
        </ThemeProvider>
    );
};

export default Providers;