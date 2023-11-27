import React, { createContext, useContext, useState } from 'react';

// Create a context for skills
export const SkillsContext = createContext();

// Create a provider component
const SkillsContextProvider = ({ children }) => {
  // State to store skills
  const [skills, setSkills] = useState([
    {
      name: 'Technology',
      coverImage: '',
      pro: true,
      editorChoice: true,
      primary: true,
      info: 'true',
      description: `Artists typically have a high level of skill and talent in their chosen medium, whether it's painting, sculpture, music, dance, acting, or any other form of artistic expression.`,
      link: 'https://www.behance.net/pronabbiswas',
      level: 'Intermediate',
      experience: '10+',
      category:['Musician'],
      skill:['Musician'],
      specialty:['Musician'],
    },
    {
      name: 'Fine Arts',
      coverImage: '',
      pro: false,
      editorChoice: false,
      primary: false,
      info: '',
      description: `Artists typically have a high level of skill and talent in their chosen medium, whether it's painting, sculpture, music, dance, acting, or any other form of artistic expression.`,
      link: 'https://www.behance.net/pronabbiswas',
      level: 'Intermediate',
      experience: '10+',
      category:['Musician'],
      skill:['Musician'],
      specialty:['Musician'],
    },
    {
      name: 'Fine Arts',
      coverImage: '',
      pro: false,
      editorChoice: false,
      primary: false,
      info: '',
      description: `Artists typically have a high level of skill and talent in their chosen medium, whether it's painting, sculpture, music, dance, acting, or any other form of artistic expression.`,
      link: 'https://www.behance.net/pronabbiswas',
      level: 'Intermediate',
      experience: '10+',
      category:['Musician'],
      skill:['Musician'],
      specialty:['Musician'],
    },
    // Add more skills as needed
  ]);
  
  // Value object to be passed down to consumers of the context
  const contextValue = {
    skills,
  };

  return (
    <SkillsContext.Provider value={contextValue}>
      {children}
    </SkillsContext.Provider>

  );
};

export default SkillsContextProvider;