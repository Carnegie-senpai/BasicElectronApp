import React from "react";
import { PageContext } from "./PageContext";

export const usePageContext = (): PageContext => {
	const [path, setPath] = React.useState("/")
	const [contextProps,setProps] = React.useState({})

	const setContext = React.useCallback((props: {path?:string, contextProps?:any}):void => {
		if (props.path)
			setPath(props.path)
		if (props.contextProps)
			setProps(props.contextProps)
	}, [])
	return {
		path:path,
		contextProps: contextProps,
		setContext: setContext
	}
}