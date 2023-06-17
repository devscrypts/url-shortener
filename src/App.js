import React, {useState} from "react";
import {
    Explore,
    Hero,
    Navbar,
    Sidebar,
    Shortener,
    Statistics,
    Footer
} from "./components";
import {Box} from "@mui/material";

const App = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <Box>
            <Navbar toggle={toggle} />
            <Sidebar open={open} toggle={toggle} />
            <Hero />
            <Shortener />
            <Statistics />
            <Explore />
            <Footer />
        </Box>
    );
};

export default App;
