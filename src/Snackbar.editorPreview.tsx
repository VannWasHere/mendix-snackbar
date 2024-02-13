import { ReactElement, createElement } from "react";
import ClickedAlert from "./components/ClickedAlert";
import { SnackbarPreviewProps } from "../typings/SnackbarProps";

export function preview({ sampleText }: SnackbarPreviewProps): ReactElement {
    return <ClickedAlert alertMessage={sampleText}/>;
}

export function getPreviewCss(): string {
    return require("./ui/Snackbar.css");
}
