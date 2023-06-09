import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext)
};


export const AppContextProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);

    const url = 'https://course-api.com/react-tabs-project';

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const newJobs = await response.json()
            // const {data} = await axios(url)
            console.log(newJobs)
            setJobs(newJobs)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(true)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(jobs)

    return (
        <AppContext.Provider value={{ jobs, loading }}>
            {children}
        </AppContext.Provider>
    )
}