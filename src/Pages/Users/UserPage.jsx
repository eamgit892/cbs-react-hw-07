import { Link, useLoaderData, useRouteLoaderData } from "react-router-dom"

export const UserPage = () => {
    
    const user = useLoaderData();
    
    console.log(user);
    
    return (
        <div className="Main user-page">
             <div>
                <Link to='/users'>Back to users...</Link>
             </div>
             <img src="" alt="user img should be here!" />
            <h4>{user.name}</h4>
            <h4>{user.age}</h4>
            <h4>{user.email}</h4>
        </div>
    )
}  