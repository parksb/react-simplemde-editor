import * as React from "react";
import * as SimpleMDE from "easymde";
import { KeyMap, DOMEvent, Editor } from "codemirror";
declare type CodemirrorEvents = "change" | "changes" | "beforeChange" | "cursorActivity" | "beforeSelectionChange" | "viewportChange" | "gutterClick" | "focus" | "blur" | "scroll" | "update" | "renderLine";
declare type SimpleMdeToCodemirror = {
    [E in CodemirrorEvents | DOMEvent]?: Editor["on"];
};
export interface SimpleMDEEditorProps {
    id?: string;
    label?: string;
    onChange: (value: string) => void | any;
    onBlur?: () => void | any;
    value?: string;
    className?: string;
    extraKeys?: KeyMap;
    options?: SimpleMDE.Options;
    events?: SimpleMdeToCodemirror;
    getMdeInstance?: (instance: SimpleMDE) => void | any;
    getLineAndCursor?: (position: CodeMirror.Position) => void | any;
}
declare type SimpleMDEEditorState = {
    value: string;
};
export default class SimpleMDEEditor extends React.PureComponent<SimpleMDEEditorProps, SimpleMDEEditorState> {
    private elementWrapperRef;
    private setElementWrapperRef;
    private keyChange;
    static defaultProps: {
        events: {};
        onChange: () => void;
        options: {};
    };
    state: {
        value: string;
    };
    id: string;
    simpleMde: SimpleMDE | null;
    editorEl: HTMLDivElement | null;
    editorToolbarEl: Element | null;
    constructor(props: SimpleMDEEditorProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: SimpleMDEEditorProps): void;
    componentWillUnmount(): void;
    imageUploadFunction: (file: File, onSuccess: (url: string) => void, onError: (error: string) => void) => void;
    createEditor: () => void;
    eventWrapper: () => void;
    removeEvents: () => void;
    addEvents: () => void;
    getCursor: () => void;
    getMdeInstance: () => void;
    addExtraKeys: () => void;
    render(): JSX.Element;
}
export {};
