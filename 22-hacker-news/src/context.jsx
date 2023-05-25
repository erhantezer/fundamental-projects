import { createContext, useContext, useEffect, useReducer } from "react";
import { SET_LOADING } from "./actions";
import reducer from "./reducer";


const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext)
};


const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

const initialState = {
    isLoading: true,
    hits: [],
    query: 'react',
    page: 0,
    nbPages: 0,
}


export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchStories = async (url) => {
        dispatch({ type: SET_LOADING })
        try {
            const res = await fetch(API_ENDPOINT);
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchStories()
    }, []);

    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}