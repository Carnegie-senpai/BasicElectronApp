import { createContext } from "react";

export const PageContext = createContext({
	path: "/",
	props: {},
	setContext: (context: {path:string,props:any}) => {}
})
