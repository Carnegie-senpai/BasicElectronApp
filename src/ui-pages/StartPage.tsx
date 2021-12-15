import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom"
import { Page } from "./Page"
function StartPageComponent() {
    return (
        <React.Fragment>
            <Typography>Test</Typography>
            <Link to="/test">CLICK ME</Link>
        </React.Fragment>
    )
}

export const StartPage: Page = { path: "/", component: StartPageComponent }