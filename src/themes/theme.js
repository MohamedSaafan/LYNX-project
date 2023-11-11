import { createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
        primary: {
            dark: "#B32DE6",
            main: "#8C20B3", //500
            light: "#D591F0",
        },
        secondary: {
            main: "#507EF1", //400
            dark: "#0F5FF7", //500
            light: "#E8EFFD", //50
        },
        success: {
            main: "#63D799", //400
        },
        warning: {
            main: "#F98B09", //500
  
        },
        tertiary: {
            golden500: "#FAAC0F",
            golden400: "#F2BF5A",
  
        },
        darkgrey: {
            darkgrey500: "#5C595C",
            darkgrey400: "#7B787C",
            darkgrey300: "#9C9A9D",
            darkgrey200: "#BEBCBE",
            darkgrey100: "#DEDDDE",
            darkgrey600: "#484649",
        },
        lightgrey: {
            lightgrey600: "#E8E1EA",
            lightgrey500: "#F5F2F6",
            lightgrey700: "#DED6E1",
            lightgrey00: "#FFFFFF",
        }
    },
});
  
export default theme;



/*

<Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {
          };
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel StepIconComponent={ColorlibStepIcon} {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

*/