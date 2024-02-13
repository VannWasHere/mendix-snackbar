import { ReactElement, createElement } from "react";
export interface AlertProps {
  alertMessage: string;
}

export default function ClickedAlert({ alertMessage }: AlertProps): ReactElement {

  const showsAlert = () => {
        setTimeout(() => {
        console.log(alertMessage);
        }, 2000);
    };

  return (
    <button onClick={showsAlert}>Click Me</button>
  );
}
