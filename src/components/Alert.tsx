import { ReactElement, createElement } from "react";

export interface AlertInterface{
    alertMessage: string;
}

export default function Alert({alertMessage}: AlertInterface): ReactElement{
    return (
        <div className="alert-bottom-left">
            <div className="alert-container">
                <div className="alert-content">
                    {alertMessage}
                </div>
            </div>
        </div>
    )
}