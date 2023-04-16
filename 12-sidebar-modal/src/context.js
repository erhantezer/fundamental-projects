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
        setIsSidebar(true);
        console.log("open sidebar")
    };

    const closeSidebar = () => {
        setIsSidebar(false)
        console.log("close sidebar")
    };

    const openModal = () => {
        setIsModal(true)
        console.log("open modal")
    };

    const closeModal = () => {
        setIsModal(false)
        console.log("close modal")
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