import { Typography } from "@mui/material";
import React from "react";
import { Page } from "./Page"
import { Link } from "../ui-components/Link"
function StartPageComponent(props: any) {
    return (
        <React.Fragment>
            <Typography>Test</Typography>
            <Link to={"/test"} props={{}}>Hello</Link>
        </React.Fragment>
    )
}

export const StartPage: Page = { path: "/", component: StartPageComponent }