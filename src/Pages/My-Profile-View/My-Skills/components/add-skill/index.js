import { Box, Button } from "@mui/material";
import React from "react";
import EditSkill from "./comonents/editSkill";
import EditDescription from "./comonents/editDescription";

const AddSkill = () => {
    return (
        <Box>
            <EditSkill />
            <EditDescription />
        </Box>
    );
}

export default AddSkill;