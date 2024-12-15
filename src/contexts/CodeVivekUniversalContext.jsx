import { createContext, useContext, useState } from "react";
import Typeracer_Trim from '../assets/videos/Typeracer_Trim.mp4'
import Scroll_Master_Preview from '../assets/videos/Scroll_Master_Preview.mp4'

const CodeVivekUniversalContext = createContext();

export const useCodeVivekUniversalContext = () => useContext(CodeVivekUniversalContext);

export const CodeVivekUniversalContextProvider = ({ children }) => {

    // Projects Data
    const ProjectsDataArray = [
        {
            id: 1,
            projectname: "Trello",
            projecttag: ["Task Manager", "Task Tracker Tool"],
            projectdescription: "A task tracker tool for managers and employees, which will make the task tracking easy.",
            projectyear: 2024,
            projectlink: "https://trellotaskmanager.developervivek.com/",
            projectpreview: "",
        },
        {
            id: 2,
            projectname: "Aesthetic Typing",
            projecttag: ["Creative", "Website", "Animation", "Frontend"],
            projectdescription: "A modern typing Website to showcase your typing speed in with a good smooth typing experience.",
            projectyear: 2024,
            projectlink: `https://aesthetictyping.developervivek.com/`,
            projectpreview: Typeracer_Trim,
        },
        {
            id: 3,
            projectname: "Scroll Master",
            projecttag: ["Chrome Extension", "Auto Scroll", "Auto Tab Change"],
            projectdescription: "This extension automates scrolling on webpages and switches to the next tab based on a list of links you provide.",
            projectyear: 2024,
            projectlink: `https://scrollmaster.developervivek.com/`,
            projectpreview: Scroll_Master_Preview,
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


    // Pass values as props
    const values = {
        activeSection,
        setActiveSection,
        handleActiveSection,
        ProjectsDataArray,

    };

    return (
        <CodeVivekUniversalContext.Provider value={values}>
            {children}
        </CodeVivekUniversalContext.Provider>
    );
};
