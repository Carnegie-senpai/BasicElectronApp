import React from "react"
import * as pages from "./index"
import { PageContext } from "../system/PageContext"
export interface Page {
    path: string,
    component: (props: any) => JSX.Element
}

export function getPages(): { [path: string]: (props: any) => JSX.Element } {
    let result = {}
    Object.values(pages).forEach((page) => {
        result[page.path] = page.component
    })
    return result
}