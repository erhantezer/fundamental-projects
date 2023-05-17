import { createContext, useContext, useEffect, useState } from "react";


const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext)
};


const clientID = `?client_id=-WsG44wZbP_-YsLll3ho70imGuxqUSGtc2kbBajE7Bc`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [photos, setPhotos] = useState([]);
    const [query, setQuery] = useState("");

    const dataFetch = async () => {
        setLoading(true);
        let url;
        const urlPage = `&page=${page}`;
        const urlQuery = `&query=${query}`;
        if (query) {
            url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
        } else {
            url = `${mainUrl}${clientID}${urlPage}`
        }
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            setPhotos(data)
            setLoading(false)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        dataFetch()
    }, [page]);

    return (
        <AppContext.Provider value={{
            loading,
            setLoading,
            page,
            setPage,
            photos,
            setPhotos,
            query,
            setQuery,
            dataFetch
        }}>
            {children}
        </AppContext.Provider>
    )
}