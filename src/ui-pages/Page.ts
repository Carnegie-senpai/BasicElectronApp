import React from "react"
import * as pages from "./index"

export interface Page {
    path: string,
    component: () => JSX.Element
}

export function getPages(): { [path: string]: () => JSX.Element } {
    let result = {}
    Object.values(pages).forEach((page) => {
        result[page.path] = page.component
    })
    return result
}