import React, {useState} from "react";
import {Box, Pagination, Stack, styled, Typography} from "@mui/material";
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import {ShortenButton} from "../page.style";
import usePaginate from "hooks/usePaginate";

const Links = ({data}) => {
    const [pageData, page, handleChange, pageCount] = usePaginate(data, 3);

    return (
        <Container>
            {pageData.map((link) => (
                <Link key={link.result.code} link={link} />
            ))}
            <Stack alignItems="center">
                <Pagination
                    count={pageCount}
                    page={page}
                    color="primary"
                    onChange={handleChange}
                />
            </Stack>
        </Container>
    );
};

const Link = ({link}) => {
    const [isCopied, setIsCopied] = useState(false);
    return (
        <StyledStack
            direction={{xs: "column", md: "row"}}
            justifyContent="space-between"
            alignItems={{xs: "flex-start", md: "center"}}
            key={link.result.code}>
            <StyledText>{link.result.original_link}</StyledText>

            <Divider />

            <Wrapper
                direction={{xs: "column", md: "row"}}
                alignItems={{xs: "flex-start", md: "center"}}>
                <StyledTypography variant="body2" color="primary.main">
                    {link.result.full_short_link}
                </StyledTypography>

                <CopyToClipboard
                    text={link.result.short_link}
                    onCopy={() => setIsCopied(true)}>
                    <StyledShortenButton variant="contained" copied={isCopied}>
                        {isCopied ? "Copied!" : "Copy"}
                    </StyledShortenButton>
                </CopyToClipboard>
            </Wrapper>
        </StyledStack>
    );
};

const Container = styled(Box)(({theme}) => ({
    position: "relative",
    marginTop: 80,
    width: "80%",
    [theme.breakpoints.down("md")]: {
        marginTop: 120
    }
}));

const StyledStack = styled(Stack)(({theme}) => ({
    background: theme.palette.common.white,
    borderRadius: Number(theme.shape.borderRadius) * 2,
    padding: theme.spacing(0.5, 2),
    margin: theme.spacing(2, 0, 4),
    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(2.5, 0)
    }
}));
const Wrapper = styled(Stack)(({theme}) => ({
    [theme.breakpoints.down("md")]: {
        width: "100%",
        padding: theme.spacing(0, 2.5)
    }
}));

const StyledTypography = styled(Typography)(({theme}) => ({
    ...theme.typography.body2,
    textOverflow: "ellipsis",
    color: theme.palette.primary.main,
    overflow: "hidden",
    width: "100%"
}));

const StyledText = styled(StyledTypography)(({theme}) => ({
    color: theme.palette.text.primary,
    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(0, 2.5)
    }
}));

const StyledShortenButton = styled(ShortenButton, {
    shouldForwardProp: (props) => props !== "copied"
})(({theme, copied}) => ({
    height: "100%",
    ...(copied && {background: theme.palette.secondary.main}),
    [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(1)
    }
}));

const Divider = styled("hr")(({theme}) => ({
    width: "100%",
    display: "none",
    border: "none",
    borderTop: `2px solid ${theme.palette.grey[200]}`,
    [theme.breakpoints.down("md")]: {
        display: "flex"
    }
}));
export default Links;
