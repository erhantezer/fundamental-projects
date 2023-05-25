import { createContext, useContext, useEffect, useReducer } from "react";
import { HANDLE_PAGE, HANDLE_SEARCH, REMOVE_STORY, SET_LOADING, SET_STORIES } from "./actions";
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
            dispatch({ type: SET_STORIES, payload: {} })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchStories()
    }, []);


    const removeStory = (id) => {
        dispatch({ type: REMOVE_STORY, payload: id })
    }

    const handleSearch = (query) => {
        dispatch({ type: HANDLE_SEARCH, payload: query })
    }

    const handlePage = (value) => {
        dispatch({ type: HANDLE_PAGE, payload: value })
    }

    return (
        <AppContext.Provider value={{
            ...state,
            removeStory,
            handleSearch,
            handlePage
        }}>
            {children}
        </AppContext.Provider>
    )
}