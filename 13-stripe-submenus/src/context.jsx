import { createContext, useContext, useState } from "react";
import sublinks from "./helper/data";

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext)
};

export const AppProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const [submenu, setSubmenu] = useState(false);
    const [page, setPage] = useState({ page: "", links: [] });
    const [location, setLocation] = useState({});

    const openSidebar = () => {
        setSidebar(true)
    };

    const closeSidebar = () => {
        setSidebar(false);
    }

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates)
        setSubmenu(true)
    };

    const closeSubmenu = () => {
        setSubmenu(false)
    };



    return (
        <AppContext.Provider value={{
            sidebar,
            submenu,
            page,
            location,
            openSidebar,
            closeSidebar,
            openSubmenu,
            closeSubmenu,
        }}>
            {children}
        </AppContext.Provider>
    )
}