import { useRouteError } from "react-router-dom"

export default function ErrorPage() {

    const error = useRouteError();
    console.log(error);
    
    return (
        <div className="Main">
            <h1>Oops!</h1>
            <h3>This page does not exists!!!</h3>
        </div>
    )
}