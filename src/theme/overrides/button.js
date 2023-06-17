export default function Button(theme) {
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "capitalize",
                    borderRadius: Number(theme.shape.borderRadius) * 5
                },
                contained: {
                    boxShadow: "none",
                    "&:hover": {
                        background: theme.palette.primary.lighter,
                        boxShadow: "none"
                    }
                }
            }
        }
    };
}
