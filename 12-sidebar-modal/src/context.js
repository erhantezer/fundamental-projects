import { useState } from "react";
import { createContext, useContext } from "react";

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
    const [isSidebar, setIsSidebar] = useState(false);
    const [isModal, setIsModal] = useState(false);

    const openSidebar = () => {
        setIsSidebar(true)
    };

    const closeSidebar = () => {
        setIsSidebar(false)
    };

    const openModal = () => {
        setIsModal(true)
    };

    const closeModal = () => {
        setIsModal(false)
    };


    return (
        <AppContext.Provider
            value={{
                isSidebar,
                isModal,
                openSidebar,
                closeSidebar,
                openModal,
                closeModal
            }}
        >
            {children}
        </AppContext.Provider>
    )
}