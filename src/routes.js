import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Header from './Components/header'
import Erro from './pages/Erro/';
import Produto from './pages/produto/'

const Routes = ()=>{
    return(
        <BrowserRouter>
        <Header/>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route   path='/sobre' component={Sobre}/>
        <Route  path='/Produto:id' component={Produto}/>
        <Route path='*' component={Erro}/>
        </Switch>
        </BrowserRouter>

    );
}

export default Routes;