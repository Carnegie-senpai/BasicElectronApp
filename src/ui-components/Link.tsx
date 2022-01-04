import { Typography } from "@mui/material";
import React from "react";
import { PageContext } from "../system/PageContext";
export function Link(props: { to: string, props: any, children: any }) {
	const {children} = props
	return (
		<React.Fragment>
			<PageContext.Consumer>
				{({path,props})=> {
					return (
						<React.Fragment>
							<Typography
								color="blue"
								onClick={()=> {
									console.log("clicked")
								}}>{children}</Typography>
						</React.Fragment>
					)
				}}
			</PageContext.Consumer>
		</React.Fragment>
	)
}