import React from "react";
import {
    AppBar,
    Box,
    Button,
    Stack,
    Toolbar,
    Container,
    Typography,
    useScrollTrigger,
    styled
} from "@mui/material";
import roundMenu from "@iconify/icons-ic/round-menu";
import {Icon} from "@iconify/react";
import logo from "images/logo.svg";

const Navbar = ({toggle}) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return (
        <StyledAppBar trigger={trigger}>
            <Toolbar>
                <Container maxWidth="lg">
                    <Stack direction="row" alignItems="center">
                        <StyledImage src={logo} alt="logo" />
                        <ItemContainer>
                            <Stack
                                direction="row"
                                spacing={5}
                                alignItems="center"
                                sx={{ml: 5}}>
                                {navItems.map((o) => (
                                    <StyledTypography key={o.id}>
                                        {o.link}
                                    </StyledTypography>
                                ))}
                            </Stack>
                            <Box sx={{display: "flex", flexGrow: 1}} />
                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center">
                                <OutlinedButton variant="outlined">
                                    Login
                                </OutlinedButton>
                                <Button variant="contained">Sign Up</Button>
                            </Stack>
                        </ItemContainer>
                        <IconContainer>
                            <StyledIcon icon={roundMenu} onClick={toggle} />
                        </IconContainer>
                    </Stack>
                </Container>
            </Toolbar>
        </StyledAppBar>
    );
};

const navItems = [
    {
        id: 1,
        link: "Features"
    },
    {
        id: 2,
        link: "Pricing"
    },
    {
        id: 3,
        link: "Resources"
    }
];

const StyledAppBar = styled(AppBar, {
    shouldForwardProp: (props) => props !== "trigger"
})(({theme, trigger}) => ({
    width: "100%",
    boxShadow: "none",
    background: "transparent",
    ...(trigger && {
        boxShadow: theme.shadows[2],
        background: theme.palette.background.default
    })
}));

const StyledImage = styled("img")({
    width: 80
});

const StyledTypography = styled(Typography, {
    shouldForwardProp: (props) => props !== "trigger"
})(({theme, trigger}) => ({
    fontSize: 14,
    "&:hover": {
        cursor: "pointer",
        color: theme.palette.text.primary,
        fontWeight: 700
    },
    color: trigger ? theme.palette.text.primary : theme.palette.grey["700"]
}));

const OutlinedButton = styled(Button)(({theme}) => ({
    "&.MuiButton-outlinedPrimary": {
        border: "none",
        "&:hover": {
            color: theme.palette.primary.lighter,
            background: "none"
        }
    }
}));

const StyledIcon = styled(Icon)(({theme}) => ({
    fontSize: 30,
    "&:hover": {cursor: "pointer"},
    position: "relative",
    right: 0,
    color: theme.palette.grey["100"]
}));

const ItemContainer = styled(Box)(({theme}) => ({
    width: "100%",
    display: "flex",
    [theme.breakpoints.down("md")]: {
        display: "none"
    }
}));

const IconContainer = styled(Box)(({theme}) => ({
    width: "100%",
    display: "none",
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
        display: "flex"
    }
}));

export default Navbar;
