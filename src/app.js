import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from "./pages";
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks'


export default function App() {
    const { user } = useAuthListener();

    return (
        <BrowserRouter>
            <Switch>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
                    <Home/>
                </IsUserRedirect>

                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
                    <Signin/>
                </IsUserRedirect>

                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                    <Signup/>
                </IsUserRedirect>

                <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                    <Browse/>
                </ProtectedRoute>
            </Switch>
        </BrowserRouter>
    );
}
