import { useState, useEffect } from "react";

const useStatusCheck = () => {

    [getStatus, setStatus] = useState(true);

    useEffect(() => {
        checkStatus();
    }, []);

    function checkStatus()
    {
        window.addEventListener("offline", (e) => {
            setStatus(false);
        });

        window.addEventListener("online", (e) => {
            setStatus(true);
        });
    };

    return getStatus;

}

export default useStatusCheck;