
import {createContext, useContext, useState} from "react";
import data from "./helper/data";

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export const AppContextProvider = ({children}) => {
    const [people, setPeople] = useState(data);

    return(
        <AppContext.Provider value={{ people, setPeople }}>
                {children}
        </AppContext.Provider>
        )
}