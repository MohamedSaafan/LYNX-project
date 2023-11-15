import { ClickAwayListener, Fade, IconButton, Tooltip, Typography, tooltipClasses } from "@mui/material";
import React from "react";
import theme from "../../../../../../../themes/theme";
import styled from "@emotion/styled";


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


const Info = () => {

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
                        sx={{
                            border: '1px solid ',
                            borderColor: theme.palette.darkgrey.darkgrey500,
                            bgcolor: theme.palette.darkgrey.darkgrey100,
                            display: 'flex',
                            width: '20px',
                            height: '20px',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="body2"
                            color={theme.palette.darkgrey.darkgrey500}
                            fontWeight='500'
                        >i</Typography>
                    </IconButton>    
                </InfoTooltip>
            </div>
        </ClickAwayListener>
    );
}

export default Info;