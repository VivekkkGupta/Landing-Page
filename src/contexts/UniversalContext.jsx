import { createContext, useContext, useState, useEffect } from "react";

const UniversalContext = createContext()

export const useUniversalContext = () => useContext(UniversalContext)

export const UniversalContextProvider = ({ children }) => {

    // Universal useStates
    const [activeSection, setActiveSection] = useState("home");

    // Navbar useStates 


    // Navbar Functions
    const handleActiveSection = (item) => {
        setActiveSection(item.toLowerCase())
    }


    // Universal useEffects



    // Pass values as prop
    const values = {
        activeSection, setActiveSection,
        handleActiveSection,
    }

    return (
        <UniversalContext.Provider value={values}>
            {children}
        </UniversalContext.Provider>
    )
}