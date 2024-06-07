import { useRouteError } from "react-router-dom";

const Error = ()=>{
const errorData = useRouteError();
return (
    <div>
        <h4>{errorData.statusText}</h4>
        <h4>{errorData.status}</h4>
    </div>
)
}

export default Error;