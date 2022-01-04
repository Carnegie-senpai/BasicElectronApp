import { createContext, useState } from "react";


export interface PageContext {
	path: string,
	contextProps: any,
	setContext: (props: {path?:string,contextProps?:any}) => void
}

export const pageContext = createContext<PageContext>({
	path: "/",
	contextProps: {},
	setContext: (props: { props: string, contextProps: any }) => { }
})
