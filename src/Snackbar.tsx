import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { SnackbarContainerProps } from "../typings/SnackbarProps";

import "./ui/Snackbar.css";

export function Snackbar({ sampleText }: SnackbarContainerProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText ? sampleText : "World"} />;
}
