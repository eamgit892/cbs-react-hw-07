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
            <Route path='/users'      element={<Users/>} />
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

function loader(obj) {
    let userId =obj.params.userId 
    console.log(userId)
    const user = usersData.filter(u => u.id == userId)
    console.log(user[0])
    return user[0]
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
