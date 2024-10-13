import { createContext, useContext, useState } from "react";
import Milkyway3 from "../assets/videos/Milkyway_3.mp4";  // Ensure you import the asset

const UniversalContext = createContext();

export const useUniversalContext = () => useContext(UniversalContext);

export const UniversalContextProvider = ({ children }) => {

    // Projects Data
    const ProjectsDataArray = [
        {
            id: 1,
            projectname: "Ochi Design",
            projecttag: ["Creative", "Website"],
            projectdescription: "Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.",
            projectyear: 2022,
            projectlink: "",
            projectpreview: Milkyway3,
        },
        {
            id: 2,
            projectname: "Ochi Design",
            projecttag: ["Creative", "Website"],
            projectdescription: "Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.",
            projectyear: 2022,
            projectlink: "",
            projectpreview: "https://sumatran.cat/google-io-countdown.5f03776a.mp4",
        },
    ];

    // Universal useStates
    const [activeSection, setActiveSection] = useState("home");

    // Navbar Functions
    const handleActiveSection = (item) => {
        setActiveSection(item.toLowerCase());
    };

    // Pass values as props
    const values = {
        activeSection,
        setActiveSection,
        handleActiveSection,
        ProjectsDataArray,
    };

    return (
        <UniversalContext.Provider value={values}>
            {children}
        </UniversalContext.Provider>
    );
};
