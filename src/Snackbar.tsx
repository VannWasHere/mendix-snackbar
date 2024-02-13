import { ReactElement, createElement } from "react";

import { SnackbarContainerProps } from "../typings/SnackbarProps";
import ClickedAlert from "./components/ClickedAlert";

import "./ui/Snackbar.css";

export function Snackbar({ sampleText }: SnackbarContainerProps): ReactElement {
    return (
        <div>
            <ClickedAlert alertMessage={sampleText}/>    
        </div>
    )
}
