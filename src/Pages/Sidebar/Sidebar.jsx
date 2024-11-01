import { NavLink } from 'react-router-dom'
import './Sidebar.css';
// import { NavLink } from 'react-router-dom';

function Sidebar(){
    return(
        <div className="Sidebar">
            <nav>
                <ul>
                    <li>
                        <NavLink to='/statehooks'>Built-in React Hooks</NavLink> 
                        {/* <a href="/statehooks">Built-in React Hooks</a> */}
                    </li>
                    <li>
                        <NavLink to="/community">Community</NavLink>
                        {/* <a href="/community">Community</a> */}
                    </li>
                    <li> 
                        <NavLink to="/resources">Resources</NavLink>
                        {/* <a href="/resources">Resources</a> */}
                    </li>   
                    <li>
                        <NavLink to="/about">About</NavLink>
                        {/* <a href="/about">About</a> */}
                    </li>
                    <li>
                        <a href="/users">Users</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;