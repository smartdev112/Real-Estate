import { useContext, createContext, useState, ReactNode } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';

type ResponsiveProps = {
    matches_425: boolean,
    matches_600: boolean,
    matches_768: boolean,
    matches_900: boolean,
    matches_1024: boolean,
    matches_1440: boolean,
}

const ResponsiveContext = createContext<ResponsiveProps>({
    matches_425: false,
    matches_600: false,
    matches_768: false,
    matches_900: false,
    matches_1024: false,
    matches_1440: false,
})

export default function ResponsiveProvider({ children }: {
    children: ReactNode;
}) {
    const matches_425 = useMediaQuery('(min-width:425px)');
    const matches_600 = useMediaQuery('(min-width:600px)');
    const matches_768 = useMediaQuery('(min-width:768px)');
    const matches_900 = useMediaQuery('(min-width:900px)');
    const matches_1024 = useMediaQuery('(min-width:1024px)');
    const matches_1440 = useMediaQuery('(min-width:1440px)');

    return <ResponsiveContext.Provider value={{ matches_425, matches_600, matches_768, matches_900, matches_1024, matches_1440 }}>{children}</ResponsiveContext.Provider>
}

export const useResponsive = () => useContext(ResponsiveContext)