import { createContext, useContext, useState } from "react";
import items from './helper/data';

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export const AppContextProvider = ({children}) => {
    const [menuItems, setMenuItems] = useState(items);

    return (
        <AppContext.Provider value={{ menuItems, setMenuItems }}>
                {children}
            </AppContext.Provider>
        );
}