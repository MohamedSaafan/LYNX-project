import React from "react";
import { Box } from "@mui/material";
import styles from './style.module.css';
import theme from "../../themes/theme";
import Footer from "../Footer/footer";
import profilePicture from '../../assets/images/PrimaryImage.png';
import Header from "./header";
import Content from "./Content";

const users = [
    {
        "id": 11,
        "is_verified": null,
        "signup_completed": true,
        "profile_image": "https://lh3.googleusercontent.com/a/ACg8ocKwLYUwHiTYDyYgyYLOzaf7FJ9ZEwLVmy2U3OiPnna4=s96-c",
        "about": null,
        "real_name": "Mohamed Saafan",
        "public_email": null,
        "priority_code": "priority code",
        "type": null,
        "creative": null,
        "country": "United States",
        "postal_code": "12822",
        "birth_date": "2000-02-28",
        "pronouns": "He/Him",
        "stage_name": null,
        "mobile": "01102076772",
        "date_added": "2023-11-24",
        "billing_date": "2023-11-24",
        "last_login": null,
        "last_record_change": "2023-11-24",
        "city": null,
        "tagline": "this is my tag line 🌞 updated",
        "email": "muhammadsaafaan@gmail.com",
        "default_billing_date": null,
        "talent_tier": null,
        "generation": null,
        "profile_image_flag": null,
        "is_reported": null,
        "nick_name": null
    }
]

const PublicProfileView = () => {
    const [value, setValue] = React.useState(0);
    const [profileImage, setProfilImage] = React.useState(profilePicture);

    const data = {
        value,
        setValue,
    }
    return (
        <Box className={styles.parent}>
            <Box className={styles.cardDetails}
                sx={{
                    bgcolor: theme.palette.lightgrey.lightgrey600,
                }}
            >
                <Header data={data}  profilImage={profileImage} />
                <Content value={value}/>
            </Box>
            <Footer />
        </Box>  
    );
};

export default PublicProfileView;