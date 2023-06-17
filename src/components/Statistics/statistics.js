import React from "react";
import {Box, Card, Container, Stack, styled, Typography} from "@mui/material";
import brandIcon from "images/icon-brand-recognition.svg";
import recordsIcon from "images/icon-detailed-records.svg";
import customIcon from "images/icon-fully-customizable.svg";
import {Header} from "../page.style";

const Statistics = () => {
    return (
        <RootStyle>
            <Container maxWidth="lg">
                <Stack alignItems="center">
                    <Header>Advanced Statistics</Header>
                    <Subheader align="center">
                        Track how links are performing across the web with our
                        advanced statistics dashboard.
                    </Subheader>
                </Stack>
                <Stack
                    direction={{xs: "column", md: "row"}}
                    spacing={3}
                    justifyContent="center"
                    sx={{mt: 12.5}}>
                    {statItems.map((o) => (
                        <StyledCard key={o.id}>
                            <IconContainer
                                alignItems="center"
                                justifyContent="center">
                                <StyledImage src={o.icon} alt={o.iconDesc} />
                            </IconContainer>
                            <Typography
                                variant="subtitle1"
                                sx={{fontWeight: 700}}>
                                {o.header}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{textAlign: {xs: "center", md: "left"}}}>
                                {o.content}
                            </Typography>
                        </StyledCard>
                    ))}
                </Stack>
            </Container>
        </RootStyle>
    );
};

const statItems = [
    {
        id: 1,
        header: "Brand Recognition",
        content:
            "Boost your brand recognition with each click. Generic Links don't mean a thing. Branded Links help instil confidence in your content.",
        icon: brandIcon,
        iconDesc: "brandIcon"
    },
    {
        id: 2,
        header: "Detailed Records",
        content:
            "Gain insights into who is clicking your Links. Knowing when and where people engage with your content helps inform better decisions.",
        icon: recordsIcon,
        iconDesc: "recordsIcon"
    },
    {
        id: 3,
        header: "Fully Customizable",
        content:
            "Improve brand awareness and content discoverability through customizable Links, supercharging audience engagement.",
        icon: customIcon,
        iconDesc: "customIcon"
    }
];

const RootStyle = styled(Box)(({theme}) => ({
    padding: theme.spacing(13, 0, 12.5),
    zIndex: 1,
    background: theme.palette.grey["200"],
    [theme.breakpoints.down("md")]: {
        paddingBottom: theme.spacing(6)
    }
}));

const Subheader = styled(Typography)(({theme}) => ({
    ...theme.typography.body2,
    color: theme.palette.grey["100"],
    marginTop: theme.spacing(1),
    width: "38%",
    [theme.breakpoints.down("md")]: {
        width: "100%"
    }
}));

const StyledCard = styled(Card)(({theme}) => ({
    position: "relative",
    padding: theme.spacing(5, 2.5, 4),
    overflow: "visible",
    borderRadius: Number(theme.shape.borderRadius) * 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    height: "fit-content",
    zIndex: 2,
    width: "28%",
    "&:nth-of-type(2)": {
        marginTop: "3%"
    },
    "&:nth-of-type(3)": {
        marginTop: "6%"
    },
    "&:first-of-type::before": {
        content: "''",
        position: "absolute",
        width: "200%",
        height: theme.spacing(0.5),
        background: theme.palette.primary.main,
        left: "100%",
        top: "70%"
    },
    [theme.breakpoints.down("md")]: {
        alignItems: "center",
        width: "100%",
        "&:nth-of-type(2)": {
            marginTop: theme.spacing(9)
        },
        "&:nth-of-type(3)": {
            marginTop: theme.spacing(9)
        },
        "&:first-of-type::before": {
            width: theme.spacing(0.5),
            height: "200%",
            left: "50%",
            top: "100%"
        }
    }
}));

const IconContainer = styled(Stack)(({theme}) => ({
    position: "absolute",
    background: theme.palette.secondary.main,
    alignItems: "center",
    padding: theme.spacing(2),
    borderRadius: "50%",
    top: -30
}));

const StyledImage = styled("img")({
    width: 30
});

export default Statistics;
