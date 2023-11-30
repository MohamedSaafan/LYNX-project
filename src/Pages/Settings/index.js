import React from "react";
import styles from './style.module.css';
import Landing from "./landing";
import theme from "../../themes/theme";
import SubscriptionStatus from "./subscription-status";
import PrivacyAndPolicy from "./privacy&policy";
import TermsOfService from "./terms-of-service";
import DeleteConfirmation from "./delete-account";

const Settings = () => {
    return (
        <React.Fragment>
            <Landing />
            <SubscriptionStatus />
            <PrivacyAndPolicy />
            <TermsOfService />
            <DeleteConfirmation />
        </React.Fragment>        
    );
}
export default Settings;