import { createContext, useState } from "react";

export const searchContext = createContext(null);
const SearchContextProvider = (props) => {
    const [category, setCategory] = useState("null");
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedAge, setSelectedAge] = useState(null);
    const [selectedEditorChoice, setSelectedEditorChoice] = useState(false);
    const [selectedProsOnly, setSelectedProsOnly] = useState(false);

  const contextValue = {
    category,
    setCategory,
    selectedSkill,
    setSelectedSkill,
    selectedSpecialty,
    setSelectedSpecialty,
    selectedCountry,
    setSelectedCountry,
    selectedState,
    setSelectedState,
    selectedAge,
    setSelectedAge,
    selectedEditorChoice,
    setSelectedEditorChoice,
    selectedProsOnly,
    setSelectedProsOnly,
  };

  return (
    <searchContext.Provider value={contextValue}>
      {props.children}
    </searchContext.Provider>
  );
};
export default SearchContextProvider;