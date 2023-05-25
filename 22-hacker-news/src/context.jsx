import { createContext, useContext, useReducer } from "react";


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

    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}