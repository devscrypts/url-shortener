import {Button, styled, Typography} from "@mui/material";

export const ShortenButton = styled(Button)(({theme}) => ({
    marginLeft: theme.spacing(2.5),
    width: "20%",
    height: 50,
    borderRadius: Number(theme.shape.borderRadius) * 2,
    [theme.breakpoints.down("md")]: {
        marginLeft: theme.spacing(0),
        marginTop: theme.spacing(2.5),
        width: "100%"
    }
}));

export const Header = styled(Typography)(({theme}) => ({
    ...theme.typography.h3,
    fontWeight: 700,
    fontSize: "3rem",
    [theme.breakpoints.down("lg")]: {
        fontSize: "2.5rem"
    },
    [theme.breakpoints.down("md")]: {
        textAlign: "center"
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "1.75rem"
    }
}));
