import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext)
};

const url = 'https://course-api.com/react-tours-project';

export const AppContextProvider = ({ children }) => {
    const [tours, setTours] = useState([]);

    const fetchTours = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json()
            setTours(data)
        } catch (error) {
            console.log(error)
        }
    }

    console.log(tours)

    useEffect(() => {
        fetchTours()
    }, []);

    return (
        <AppContext.Provider value={{ tours, setTours }}>
            {children}
        </AppContext.Provider>
    )
}