import { Box, Button, ClickAwayListener, Fade, IconButton, Link, Tooltip, Typography, capitalize, tooltipClasses } from "@mui/material";
import React from "react";
import theme from "../../../../../../themes/theme";
import { Info, InfoOutlined } from "@mui/icons-material";
import styled from "@emotion/styled";
import styles from './style.module.css';

const InfoTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.lightgrey.lightgrey500,
        maxWidth: '260px',
          padding: '16px',
          boxShadow: theme.shadows[1],
    },
  }));


const MyInfo = () => {
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(!open);
    };
    return (
        <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
                <InfoTooltip
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 300 }}
                    PopperProps={{
                    disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableTouchListener
                    title={
                        <React.Fragment>
                        <Typography color={theme.palette.darkgrey.darkgrey600} variant="body1">Info tab</Typography>
                        <Typography color={theme.palette.darkgrey.darkgrey300} variant="body2">supporting line text lorem ipsum dolar sit amet,sghsdgh</Typography>
                        </React.Fragment>
                    }
                >
                    <IconButton onClick={handleTooltipOpen} aria-label="info"
                        className={styles.iconButton}
                        sx={{
                            bgcolor: theme.palette.darkgrey.darkgrey100,
                        }}
                    >
                        <InfoOutlined
                            sx={{
                                color: theme.palette.darkgrey.darkgrey500,
                            }}
                        />
                    </IconButton>    
                </InfoTooltip>
            </div>
        </ClickAwayListener>  
    );
}

export default MyInfo;