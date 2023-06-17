import React from "react";
import {
    Drawer,
    Button,
    Typography,
    Stack,
    styled,
    useMediaQuery
} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const Sidebar = ({open, toggle}) => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up("md"), {
        defaultMatches: true
    });

    const mdOpen = isMd ? false : open;

    return (
        <StyledDrawer anchor="top" open={mdOpen} onClose={toggle}>
            <Stack alignItems="center">
                {sideItems.map((o) => (
                    <StyledTypography
                        key={o.id}
                        sx={{
                            mb: 2.5
                        }}>
                        {o.link}
                    </StyledTypography>
                ))}
                <Divider />
                <StyledStack spacing={2}>
                    <OutlinedButton
                        component="a"
                        href="/register"
                        variant="outlined">
                        <StyledTypography>Login</StyledTypography>
                    </OutlinedButton>
                    <Button variant="contained" component="a" href="/register">
                        <StyledTypography>Sign Up</StyledTypography>
                    </Button>
                </StyledStack>
            </Stack>
        </StyledDrawer>
    );
};

const sideItems = [
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

const StyledDrawer = styled(Drawer)(({theme}) => ({
    "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: "80%",
        margin: theme.spacing(9, "auto", 0),
        borderRadius: Number(theme.shape.borderRadius) * 2,
        padding: theme.spacing(6),
        height: "fit-content",
        background: theme.palette.secondary.main
    }
}));

const Divider = styled("hr")(({theme}) => ({
    width: "100%",
    border: "none",
    borderTop: `1px solid ${theme.palette.grey[600]}`
}));

const OutlinedButton = styled(Button)(({theme}) => ({
    "&.MuiButton-outlinedPrimary": {
        border: "none",
        width: "100%",
        color: theme.palette.common.white
    }
}));

const StyledTypography = styled(Typography)(({theme}) => ({
    ...theme.typography.subtitle1,
    fontWeight: 700,
    color: theme.palette.common.white
}));

const StyledStack = styled(Stack)({
    width: "100%"
});
export default Sidebar;
