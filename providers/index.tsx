"use client";

import { ReactNode } from "react";
import LayoutProvider from "./layout";

interface ProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
    return (
        <LayoutProvider>
            {children}
        </LayoutProvider>
    );
};

export default Providers;