import React from "react";
import { Box } from "@mui/material";
import styles from './MyProfile.module.css';
import theme from "../../../themes/theme";
import Footer from "../../Footer/footer";
import ProfileImage from "./profile-image";
import profilePicture from '../../../assets/images/PrimaryImage.png';
import ProfileTabs from "./profile-tabs";
import DisplayTabs from "./profile-tabs/display-tabs";
import ProfileName from "./profile-name";
  
const MyProfile = () => {
    const [value, setValue] = React.useState(0);
    const [profilImage, setProfilImage] = React.useState(profilePicture);

    const data = {
        value,
        setValue
    }

    return (
        <Box className={styles.parent}>
            <Box className={styles.cardDetails}
                sx={{
                    bgcolor: theme.palette.lightgrey.lightgrey600,
                }}
            >
                <Box className={styles.myCardDetails}>
                    <Box className={styles.userDetails}>
                        <Box className={styles.details}>
                            <ProfileImage profilImage={profilImage}/>
                            <ProfileName />
                        </Box>
                    </Box>
                    <ProfileTabs data={data}/>
                </Box>
                <DisplayTabs value={value}/>
            </Box>
            <Footer />
        </Box>  
    );
}

export default MyProfile;