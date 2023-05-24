import React, { useState, useContext } from 'react'
import useMovieFetch from './hooks/useMovieFetch'
// make sure to use https



const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [query, setQuery] = useState('batman')
    const { loading, error, movies } = useMovieFetch(`&s=${query}`)

    return (
        <AppContext.Provider value={{ loading, error, movies, query, setQuery }}>
            {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
