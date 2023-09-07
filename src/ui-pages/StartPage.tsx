import { Typography } from "@mui/material";
import React from "react";
import { Page } from "../ui-components/Page";
import { Link } from "../ui-components/Link";

export class StartPage extends Page {
    path = "";
    component(props: any) {
        return (
            <React.Fragment>
                <Typography>Test</Typography>
                <Link to={"/test"} props={{}}>Hello</Link>
            </React.Fragment>
        );
    }
}