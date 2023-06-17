import React from "react";
import {Box, Container, Stack, styled, Typography} from "@mui/material";
import {Icon} from "@iconify/react";

const Footer = () => {
    return (
        <RootStyle>
            <Container maxWidth="lg">
                <Stack
                    direction={{xs: "column", md: "row"}}
                    justifyContent="space-around"
                    alignItems={{xs: "center", md: "flex-start"}}
                    spacing={{xs: 3, md: 0}}>
                    <Header variant="h5">Shortly</Header>
                    <Stack
                        direction={{xs: "column", md: "row"}}
                        spacing={{xs: 3, md: 8}}>
                        {footerItems.map((item) => (
                            <Stack spacing={2} key={item.id}>
                                <Header>{item.header}</Header>
                                <StyledTypography>
                                    {item.firstLink}
                                </StyledTypography>
                                <StyledTypography>
                                    {item.secondLink}
                                </StyledTypography>
                                <StyledTypography>
                                    {item.thirdLink}
                                </StyledTypography>
                                {item.fourthLink !== undefined && (
                                    <StyledTypography>
                                        {item.fourthLink}
                                    </StyledTypography>
                                )}
                            </Stack>
                        ))}
                        <Stack direction="row" spacing={2}>
                            {icons.map((o) => (
                                <StyledIcon icon={o.icon} key={o.id} />
                            ))}
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </RootStyle>
    );
};
const footerItems = [
    {
        id: 1,
        header: "Features",
        firstLink: "Link Shortening",
        secondLink: "Branded Links",
        thirdLink: "Analytics"
    },
    {
        id: 2,
        header: "Resources",
        firstLink: "Blog",
        secondLink: "Developers",
        thirdLink: "Support"
    },
    {
        id: 3,
        header: "Company",
        firstLink: "About",
        secondLink: "Our Team",
        thirdLink: "Career",
        fourthLink: "Contact"
    }
];

const icons = [
    {
        id: 1,
        icon: "ant-design:facebook-filled"
    },
    {
        id: 2,
        icon: "ant-design:twitter-outlined"
    },
    {
        id: 3,
        icon: "mdi:pinterest"
    },
    {
        id: 4,
        icon: "mdi:instagram"
    }
];

const RootStyle = styled(Box)(({theme}) => ({
    padding: theme.spacing(6, 0),
    background: theme.palette.neutral.violet,
    width: "100%"
}));

const StyledTypography = styled(Typography)(({theme}) => ({
    fontSize: 14,
    color: theme.palette.common.white,
    textAlign: "left",
    "&:hover": {
        cursor: "pointer",
        color: theme.palette.primary.main
    },
    [theme.breakpoints.down("md")]: {
        textAlign: "center"
    }
}));

const Header = styled(Typography)(({theme}) => ({
    color: theme.palette.common.white,
    fontWeight: 600,
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
        textAlign: "center"
    }
}));

const StyledIcon = styled(Icon)(({theme}) => ({
    fontSize: 20,
    color: theme.palette.common.white,
    "&:hover": {
        cursor: "pointer",
        color: theme.palette.primary.main
    }
}));

export default Footer;
