import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './global.css'

import {createBrowserRouter, createRoutesFromElements, RouterProvider
    , Route, Outlet} from 'react-router-dom'
    
import reportWebVitals from './reportWebVitals';
import Welcome from './Pages/Welcome/Welcome';
import StateHook from './Pages/StateHookPage/StateHook'
import Community from './Pages/Community/Community';
import Resources from './Pages/Resources/Resources';
import About from './Pages/About/About';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Users from './Pages/Users/Users';
import { UserPage } from './Pages/Users/UserPage';
import usersData from './data/usersTest.json'; 
import LexEnv from './Pages/LexEnvArticle/LexEnv';
import Vars from './Pages/Vars/Vars';

var usersData2 = getUsersData();

const Root = () => {
    return (<App />)
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root/>}>
            <Route index element={<Welcome/>} />
            <Route path='/statehooks' element={<StateHook/>} />
            <Route path='/community'  element={<Community/>} />
            <Route path='/resources'  element={<Resources/>} />
            <Route path='/about'      element={<About/>} />
            <Route path='*'           element={<ErrorPage/>} />
            
            {/* USERS ------------------------------------------------ */}
            <Route path='/users'      element={<Users/>} 
            loader={() => usersData2}
            />

            <Route path='users/:userId' 
                loader={loader}           element={<UserPage/>} />
            <Route path='/lexical-env'  element={<LexEnv/>} />
            <Route path='/vars-explained'  element={<Vars/>} />

        </Route>
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} > 
        <Root />
    </RouterProvider>
);

async function getUsersData() {
    const url = "https://jsonplaceholder.typicode.com/users";
        try {
            const response = await fetch(url);
            if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            console.log(Object.keys(json))
            localStorage.setItem('usersData', JSON.stringify(json))
            return json 
        } catch (error) {
            console.error(error.message);
        }
}



function loader(obj) {
    console.dir(Object.keys(obj))
    let userId =obj.params.userId 
    console.log(`USER ID IN USER LOADER ${userId}`)
    
    let usersData2 = JSON.parse(localStorage.getItem('usersData'))

    const user = usersData2.filter(u => u.id == userId)
    console.log(user[0])
  
    return user[0]
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
