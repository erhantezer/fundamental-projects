import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"

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
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [waiting, setWaiting] = useState(true);
    const [error, setError] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const fetchQuestions = async () => {
        setLoading(true)
        setWaiting(false)
        try {
            const  response  = await axios(tempUrl)
            const data = response.data.results
            console.log(data)
            if (data.length > 0) {
                setQuestions(data)
                setLoading(false)
                setWaiting(false)
                setError(false)
            } else {
                setWaiting(true)
                setError(true)
            }
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        
        fetchQuestions()
    }, []);
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