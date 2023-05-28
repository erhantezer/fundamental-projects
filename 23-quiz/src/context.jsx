import { createContext, useContext, useState } from "react"


const AppContext = createContext()

export const useGlobalContext = () => {
    return useContext(AppContext)
}


const table = {
    sports: 21,
    history: 23,
    politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''
const tempUrl =
    'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'

export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [waiting, setWaiting] = useState(true);
    const [error, setError] = useState(false);


    const fetchQuestions = () => {}

    return (
        <AppContext.Provider value={{
            loading,
            waiting,
            error,

        }}>
            {children}
        </AppContext.Provider>
    )
}