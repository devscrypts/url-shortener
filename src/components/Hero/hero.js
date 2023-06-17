import React from "react";
import {
    Box,
    Button,
    Container,
    Grid,
    Stack,
    styled,
    Typography
} from "@mui/material";
import heroImage from "images/illustration-working.svg";

const Hero = () => {
    return (
        <RootStyle>
            <Container maxWidth="lg">
                <Grid
                    container
                    alignItems="center"
                    direction={{xs: "column-reverse", md: "row"}}>
                    <Grid item xs={12} md={6}>
                        <Stack>
                            <Header>More than just shorter links</Header>
                            <Subheader>
                                Build your brand&apos;s recognition and get
                                detailed insights on how your links are
                                performing.
                            </Subheader>
                            <ButtonContainer>
                                <Button variant="contained">Get started</Button>
                            </ButtonContainer>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledImage src={heroImage} alt="hero-image" />
                    </Grid>
                </Grid>
            </Container>
        </RootStyle>
    );
};

const RootStyle = styled(Box)(({theme}) => ({
    padding: theme.spacing(12.5, 0),
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(6, 0)
    }
}));

const Header = styled(Typography)(({theme}) => ({
    ...theme.typography.h2,
    fontWeight: 700,
    fontSize: "3.75rem",
    textAlign: "left",
    [theme.breakpoints.down("lg")]: {
        fontSize: "2.75rem"
    },
    [theme.breakpoints.down("md")]: {
        textAlign: "center"
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "2rem"
    }
}));

const Subheader = styled(Typography)(({theme}) => ({
    ...theme.typography.subtitle2,
    color: theme.palette.grey["100"],
    width: "65%",
    textAlign: "left",
    margin: theme.spacing(1, 0, 2.5),
    [theme.breakpoints.down("md")]: {
        width: "100%",
        textAlign: "center"
    }
}));

const StyledImage = styled("img")(({theme}) => ({
    width: "150%",
    height: "100%",
    [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(2.5)
    }
}));

const ButtonContainer = styled(Box)(({theme}) => ({
    width: "100%",
    display: "flex",
    [theme.breakpoints.down("md")]: {
        justifyContent: "center",
        marginBottom: theme.spacing(15)
    }
}));
export default Hero;
