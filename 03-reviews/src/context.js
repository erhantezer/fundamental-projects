import { createContext, useContext, useState } from "react";
import people from "./helper/data";

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export const AppProviderContext = ({ children }) => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    return (
        <AppContext.Provider value={{ index, setIndex, name, job, image, text, people }}>
            {children}
        </AppContext.Provider>
    )
}