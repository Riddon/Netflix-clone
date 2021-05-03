import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from "./pages";


export default function App() {
    return (
        <BrowserRouter>
            <Route exact path={ROUTES.HOME}>
                <Home/>
            </Route>

            <Route exact path={ROUTES.SIGN_IN}>
                <Signin/>
            </Route>

            <Route exact path={ROUTES.SIGN_UP}>
                <Signup/>
            </Route>

            <Route exact path={ROUTES.BROWSE}>
                <Browse/>
            </Route>
        </BrowserRouter>
    );
}
