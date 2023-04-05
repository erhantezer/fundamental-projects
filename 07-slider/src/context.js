import {createContext, useContext} from "react";

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export const AppContextProvider = ({children}) => {

    
    return(
            <AppContext.Provider value={{}}>
                {children}
            </AppContext.Provider>
        )
}