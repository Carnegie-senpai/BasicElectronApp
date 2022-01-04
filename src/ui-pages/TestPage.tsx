import { Typography } from "@mui/material"
import React from "react"
import { Page } from "./Page"
import { Link } from "../ui-components/Link"
function TestPageComponent(props: any) {
    return (
        <React.Fragment>
            <Typography>You are on a new page</Typography>
            <Link to="/">Go back</Link>
        </React.Fragment>
    )
}

export const TestPage: Page = { path: "/test", component: TestPageComponent }