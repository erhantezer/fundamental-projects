import { createContext, useContext, useState } from "react";


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

        if (query) {
            const url = `${}${}${}${}`
        } else {
            const url = `${}${}${}`
        }
        try {
            const res = await fetch(url);
            const data = await res.json();
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

        }}>
            {children}
        </AppContext.Provider>
    )
}