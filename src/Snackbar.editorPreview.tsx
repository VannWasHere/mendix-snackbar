import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { SnackbarPreviewProps } from "../typings/SnackbarProps";

export function preview({ sampleText }: SnackbarPreviewProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText} />;
}

export function getPreviewCss(): string {
    return require("./ui/Snackbar.css");
}
