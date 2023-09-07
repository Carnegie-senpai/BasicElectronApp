
export abstract class Page {
    static _isPageObject = true;
    abstract path: string;
    abstract component(props: any): JSX.Element;
}