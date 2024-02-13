import { ReactElement, createElement } from "react";

export interface AlertInterface{
    alertMessage: string;
}

export default function Alert({alertMessage}: AlertInterface): ReactElement{
    return (
        <div className="bottom-left">
            <div className="container">
                <div className="content">
                    {alertMessage}
                </div>
            </div>
        </div>
    )
}