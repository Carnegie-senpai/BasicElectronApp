import { Typography } from "@mui/material";
import React from "react";
import { pageContext } from "../system/PageContext";
export function Link(props: { to: string, props?: any, children: any }) {
	const { children } = props
	const context = React.useContext(pageContext)
	return (
		<React.Fragment>
			<Typography
				color="blue"
				onClick={() => {
					if (props.props)
						context.setContext({
							path: props.to ,
							contextProps: props.props
						})
					else {
						context.setContext({ path: props.to })
					}
				}}>{children}</Typography>
		</React.Fragment>
	)
}