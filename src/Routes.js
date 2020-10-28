import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './core/Home';
import Search from './core/Search';
import Signin from './core/Signin';
import Singup from './core/Signup';
import AddVideogame from './core/AddVideogame'
import addCategory from './core/AddCategory'
import Videogame from './core/Videogame'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                {/* <Route path="/videogameById" exact component={Search} /> */}
                <Route path="/videogame/:videogameId" exact component={Videogame} />
                <Route path="/Signin" exact component={Signin} />
                <Route path="/Signup" exact component={Singup} />
                <Route path="/addvideogame" exact component={AddVideogame} />
                <Route path="/addcategory" exact component={addCategory} />
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;