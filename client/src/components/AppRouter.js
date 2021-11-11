import React, {useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";



const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)

    return (
        <Switch>
            {user.isAuth &&  authRoutes.map(({path, Component},index)=>
                <Route key={index} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component},index)=>
                <Route key={index} path={path} component={Component} exact/>
            )}
            <Redirect to ={SHOP_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;