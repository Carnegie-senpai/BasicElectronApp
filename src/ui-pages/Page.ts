
export interface Page {
    path: string,
    component: (props: any) => JSX.Element
}