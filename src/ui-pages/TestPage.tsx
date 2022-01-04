import { Typography } from "@mui/material"
import React from "react"
import { Page } from "./Page"
function TestPageComponent(props: any) {
    return (
        <React.Fragment>
            <Typography>You are on a new page</Typography>
        </React.Fragment>
    )
}

export const TestPage: Page = { path: "/test", component: TestPageComponent }