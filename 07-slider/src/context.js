import {createContext, useContext, useState} from "react";
import data from "./helper/data";

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export const AppContextProvider = ({children}) => {
    const [peopel, setPeopel] = useState(data);

    return(
            <AppContext.Provider value={{}}>
                {children}
            </AppContext.Provider>
        )
}