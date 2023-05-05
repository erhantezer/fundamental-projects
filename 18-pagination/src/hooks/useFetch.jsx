const { createContext, useContext } = require("react");

const AppContext = createContext();


export const AppProvider = ({children}) => {
    return (
            <AppContext.Provider value={{}}>
                {children}
            </AppContext.Provider>
        )
}




export const useGlobalContext = () => {
    return useContext(AppContext)
}