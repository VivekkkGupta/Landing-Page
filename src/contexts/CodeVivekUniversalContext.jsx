import { createContext, useContext, useState } from "react";
import Milkyway3 from "../assets/videos/Milkyway_3.mp4";  // Ensure you import the asset

const CodeVivekUniversalContext = createContext();

export const useCodeVivekUniversalContext = () => useContext(CodeVivekUniversalContext);

export const CodeVivekUniversalContextProvider = ({ children }) => {

    // Projects Data
    const ProjectsDataArray = [
        {
            id: 1,
            projectname: "Aesthetic Typing",
            projecttag: ["Creative", "Website", "Animation", "Frontend"],
            projectdescription: "A modern typing Website to showcase your typing speed in with a good smooth typing experience.",
            projectyear: 2024,
            projectlink: "",
            projectpreview: Milkyway3,
        },
        {
            id: 2,
            projectname: "Trello",
            projecttag: ["Web App", "Task Tracker Tool", "Todo List"],
            projectdescription: "A task tracker tool for managers and employees, which will make the task tracking easy.",
            projectyear: 2024,
            projectlink: "",
            projectpreview: "https://sumatran.cat/google-io-countdown.5f03776a.mp4",
        },
    ];

    // Universal useStates
    const [activeSection, setActiveSection] = useState("home");

    // Navbar Functions
    const handleActiveSection = (item) => {
        setActiveSection(item.toLowerCase());
        const section = document.getElementById(item.toLowerCase());
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
        }
    };

    const goToContactPage = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }


    // Pass values as props
    const values = {
        activeSection,
        setActiveSection,
        handleActiveSection,
        ProjectsDataArray,
        goToContactPage,
    };

    return (
        <CodeVivekUniversalContext.Provider value={values}>
            {children}
        </CodeVivekUniversalContext.Provider>
    );
};
