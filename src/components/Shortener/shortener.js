import React, {useState, useCallback} from "react";
import {CircularProgress, Stack, styled, Typography} from "@mui/material";
import shortenBackground from "images/bg-shorten-desktop.svg";
import shortenBackgroundMd from "images/bg-shorten-mobile.svg";
import Links from "../Links";
import {useRequest} from "hooks/useRequest";
import {ShortenButton} from "../page.style";

const Shortener = () => {
    const [value, setValue] = useState("");
    const [inputError, setInputError] = useState(false);
    const [request, loading] = useRequest();
    const [data, setData] = useState([]);
    const baseUrl = "https://api.shrtco.de/v2/";

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (value === "") {
                setInputError(true);
            } else {
                request
                    .get(`${baseUrl}shorten?url=${value}`)
                    .then((res) => {
                        setData([...data, res]);
                        setValue("");
                    })
                    .catch((err) => {
                        setValue("");
                        console.log(err);
                    });
            }
        },
        [request, data, value]
    );

    const handleChange = (e) => {
        setValue(e.target.value);
        if (inputError === true) {
            setInputError(false);
        }
    };

    return (
        <Container>
            <InputContainer>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledStack>
                        <StyledInput
                            error={inputError}
                            placeholder="Shorten a link here..."
                            value={value}
                            onChange={handleChange}
                        />
                        {inputError && (
                            <ErrorText color="error.main">
                                Please add a link
                            </ErrorText>
                        )}
                    </StyledStack>
                    <ShortenButton variant="contained" type="submit">
                        {loading ? (
                            <CircularProgress size="small" />
                        ) : (
                            "Shorten it!"
                        )}
                    </ShortenButton>
                </StyledForm>
            </InputContainer>
            {data.length > 0 && <Links data={data} />}
        </Container>
    );
};

const Container = styled(Stack)(({theme}) => ({
    position: "relative",
    background: theme.palette.grey["200"],
    alignItems: "center"
}));

const StyledForm = styled("form")(({theme}) => ({
    width: "90%",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column"
    }
}));

const InputContainer = styled(Stack)(({theme}) => ({
    position: "absolute",
    width: "80%",
    background: theme.palette.secondary.main,
    backgroundImage: `url(${shortenBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "left",
    alignItems: "center",
    padding: theme.spacing(4, 0),
    borderRadius: Number(theme.shape.borderRadius) * 2,
    top: -65,
    zIndex: 3,
    [theme.breakpoints.down("md")]: {
        backgroundImage: `url(${shortenBackgroundMd})`,
        backgroundPosition: "bottom 50px left 100px",
        top: -110
    }
}));

const StyledStack = styled(Stack)({
    width: "100%"
});

const ErrorText = styled(Typography)(({theme}) => ({
    fontSize: 12,
    marginTop: theme.spacing(0.5),
    color: theme.palette.error.main
}));

const StyledInput = styled("input", {
    shouldForwardProp: (props) => props !== "error"
})(({theme, error}) => ({
    position: "relative",
    height: 50,
    background: theme.palette.common.white,
    color: theme.palette.grey["100"],
    fontFamily: theme.typography.fontFamily,
    borderRadius: Number(theme.shape.borderRadius) * 2,
    borderColor: "transparent",
    padding: theme.spacing(2, 2.5),
    outline: "none",
    "&::placeholder": {
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.grey["100"]
    },
    [theme.breakpoints.down("md")]: {
        width: "100%"
    },
    ...(error && {
        borderColor: theme.palette.error.main,
        "&::placeholder": {
            color: theme.palette.error.main
        }
    })
}));

export default Shortener;
