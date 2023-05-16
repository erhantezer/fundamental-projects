import { createContext, useContext, useState } from "react";


const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext)
};

export const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [photos, setPhotos] = useState([]);
    const [query, setQuery] = useState("");

    const dataFetch = () => {
        
    }

    return(
            <AppContext.Provider value={{}}>
                {children}
            </AppContext.Provider>
        )
}