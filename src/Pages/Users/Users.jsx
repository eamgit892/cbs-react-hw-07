import { Link } from "react-router-dom"
import { useLoaderData } from "react-router-dom";

// import data from '../../data/usersTest.json'

export default function Users () {
    
    const usersData = useLoaderData();
    
    return (
        <div className="Main">
            <h1>Users page</h1>
            <ul>
                {usersData.map(user => 
                    
                    <li key={user.id}><Link to={"/users/" + user.id} >{user.name}</Link> </li>)}
                
            
            </ul>
        </div>
    )
}

