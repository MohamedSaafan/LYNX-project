import { createContext, useEffect, useState } from "react";

export const SkillsBarContext = createContext(null);
const SkillsBarContextProvider = (props) => {
    const [activeSkill, setActiveSkill] = useState(1);

    const contextValue = {
        activeSkill,
        setActiveSkill,
    };

    return (
        <SkillsBarContext.Provider value={contextValue}>
        {props.children}
        </SkillsBarContext.Provider>
    );
};
export default SkillsBarContextProvider;