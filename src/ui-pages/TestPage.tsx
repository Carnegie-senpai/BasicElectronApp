import { Typography } from "@mui/material"
import React from "react"
import { Page } from "../ui-components/Page"
import { Link } from "../ui-components/Link"

export class TestPage extends Page {
    path = "/test";
    component(props: any) {
        return (
            <React.Fragment>
                <Typography>You are on a new page</Typography>
                <Link to="/">Go back</Link>
            </React.Fragment>
        )
    }
}
