import { ReactElement, createElement, useState, useEffect } from "react";
import Alert from "./Alert";
export interface ClickedAlertProps {
    alertMessage: string;
  }
  
  export default function ClickedAlert({ alertMessage }: ClickedAlertProps): ReactElement {
    const [showNotif, setShowNotif] = useState<boolean>(false);
  
    useEffect(() => {
      if (showNotif) {
        const timeoutId = setTimeout(() => {
          setShowNotif(false);
        }, 2000);
  
        // Cleanup the timeout if the component unmounts before the 2 seconds are up
        return () => clearTimeout(timeoutId);
      }
    }, [showNotif]);
  
    const handleClick = () => {
      setShowNotif(true);
    };
  
    return (
      <div>
        <button onClick={handleClick}>Click Me!</button>
        <div>{showNotif && <Alert alertMessage={alertMessage} />}</div>
      </div>
    );
  }