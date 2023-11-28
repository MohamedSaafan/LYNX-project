import { createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
        primary: {
            dark: "#B32DE6",
            main: "#8C20B3", //500
            light: "#D591F0",
            purpel50: "#F4E4FB",
        },
        secondary: {
            main: "#507EF1", //400
            dark: "#0F5FF7", //500
            light: "#E8EFFD", //50
        },
        success: {
            main: "#63D799", //400
            dark: "#049262", //500
        },
        warning: {
            main: "#F98B09", //500
            light: "#FAE9D0", //100
            dark: "#BB742A", //600
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
            darkgrey50: "#F0EFF0",
        },
        lightgrey: {
            lightgrey600: "#E8E1EA",
            lightgrey500: "#F5F2F6",
            lightgrey700: "#DED6E1",
            lightgrey00: "#FFFFFF",
            lightgrey800: "#CAC1CD",
        },
        danger: {
            red300: '#E2848A',
            red500: '#E82C3C',
        }
    },
});
  
export default theme;


