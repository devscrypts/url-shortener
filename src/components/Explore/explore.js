import React from "react";
import {Box, Button, Stack, styled} from "@mui/material";
import shortenBackgroundMd from "../../images/bg-boost-mobile.svg";
import shortenBackground from "../../images/bg-boost-desktop.svg";
import {Header} from "../page.style";

const Explore = () => {
    return (
        <RootStyle>
            <Stack alignItems="center">
                <Header color="common.white">Boost your links today</Header>
                <ButtonContainer>
                    <Button variant="contained">Get started</Button>
                </ButtonContainer>
            </Stack>
        </RootStyle>
    );
};

const RootStyle = styled(Box)(({theme}) => ({
    padding: theme.spacing(6, 0),
    background: theme.palette.secondary.main,
    backgroundImage: `url(${shortenBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
        backgroundImage: `url(${shortenBackgroundMd})`
    }
}));

const ButtonContainer = styled(Box)(({theme}) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2.5)
}));

export default Explore;
