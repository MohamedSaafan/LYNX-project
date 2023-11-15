import React, { createContext, useContext, useState } from 'react';

// Create a context for user data
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  // State to store user data
  const [users, setUsers] = useState([
    {
      id: '',
      name: '',
      nickName: 'McKey',
      country: 'United States',
      postalCode: '',
      birthdate: '', 
      age: 25,
      skills: [
          { id: 101, name: 'JavaScript', level: 'Intermediate' },
          { id: 102, name: 'React', level: 'Advanced' },
      ],
    },
    // Add more users as needed
  ]);

  // Function to update user data
  const updateUser = (userId, updatedUserData) => {
    setUsers(prevUsers => {
      return prevUsers.map(user => (user.id === userId ? { ...user, ...updatedUserData } : user));
    });
  };

  // Function to add a new skill to a user
  const addUserSkill = (userId, newSkill) => {
    setUsers(prevUsers => {
      return prevUsers.map(user =>
        user.id === userId ? { ...user, skills: [...user.skills, newSkill] } : user
      );
    });
  };

  // Function to remove a skill from a user
  const removeUserSkill = (userId, skillId) => {
    setUsers(prevUsers => {
      return prevUsers.map(user =>
        user.id === userId
          ? { ...user, skills: user.skills.filter(skill => skill.id !== skillId) }
          : user
      );
    });
  };

  // Value object to be passed down to consumers of the context
  const contextValue = {
    users,
    updateUser,
    addUserSkill,
    removeUserSkill,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

// Custom hook to use the user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
