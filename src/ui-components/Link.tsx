import { Typography } from "@mui/material";
import React from "react";
import { pageContext } from "../system/PageContext";
import { NavLink } from "react-router-dom";
export function Link(props: { to: string, props?: any, children: any }) {
	const { children, to } = props
	return (
		<React.Fragment>
			<NavLink to={to} {...props.props}>{children}</NavLink>
		</React.Fragment>
	)
}