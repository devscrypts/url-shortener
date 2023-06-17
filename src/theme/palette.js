// Theme color config
import {common} from "@mui/material/colors";

const GREY = {
    0: "hsl(0, 0%, 75%)",
    100: "hsl(257, 7%, 63%)",
    200: "hsl(225,33.3%,95.3%)"
};

const NEUTRAL = {
    blue: "hsl(255, 11%, 22%)",
    violet: "hsl(260, 8%, 14%)"
};
const PRIMARY = {
    main: "hsl(180, 66%, 49%)",
    lighter: "hsl(180, 66%, 75%)",
    contrastText: "#fff"
};

const SECONDARY = {
    main: "hsl(257, 27%, 26%)",
    lighter: "hsl(257, 27%, 75%)",
    contrastText: "#fff"
};
const ERROR = {
    main: "hsl(0, 87%, 67%)",
    contrastText: "#fff"
};

const COMMON = {
    common: {black: "#000", white: "#fff"},
    primary: {...PRIMARY},
    secondary: {...SECONDARY},
    error: {...ERROR},
    grey: GREY,
    neutral: {...NEUTRAL}
};

const palette = {
    ...COMMON,
    text: {primary: common.black, secondary: GREY[100], default: common.black},
    background: {paper: "#fff", default: "#fff", neutral: GREY[0]}
};

export default palette;
