import { createContext, useEffect, useState } from "react";

export const SettingsContext = createContext(null);
const SettingsContextProvider = (props) => {
    const [openLanding, setOpenLanding] = useState(true);
    const [openSubStatus, setOpenSubStatus] = useState(false);
    const [openPrivacy, setOpenPrivacy] = useState(false);
    const [openTermsOfService, setOpenTermsOfService] = useState(false);
    const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);

    const contextValue = {
        openLanding,
        setOpenLanding,
        openSubStatus,
        setOpenSubStatus,
        openPrivacy,
        setOpenPrivacy,
        openTermsOfService,
        setOpenTermsOfService,
        openDeleteConfirmation,
        setOpenDeleteConfirmation,
    };

    return (
        <SettingsContext.Provider value={contextValue}>
        {props.children}
        </SettingsContext.Provider>
    );
};
export default SettingsContextProvider;