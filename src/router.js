import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons/index'
import NoMatch from './pages/nomatch/index.js'
import FormLogin from './pages/form/login.js';
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basicTable'


export default class IRouter extends React.Component{
    render(){
        return (
            <HashRouter>
                <div>
                    <App>
                        <Route path='/login' component={Login}></Route>
                        <Route path="/admin" render={() =>
                            <Admin>
                                <Switch>
                                {console.log(123)}
                                    <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                    
                                    <Route path="/admin/form/login" component={FormLogin}></Route>
                                    <Route path="/admin/form/reg" component={FormRegister}></Route>
                                    <Route path="/admin/table/basic" component={BasicTable}></Route>
                                    <Route component={NoMatch}/>
                                </Switch>
                            </Admin>
                        }/>
                        <Route path="/order/detail" component={Login}></Route>
                        
                    </App>
                </div>
            </HashRouter>
        )
    }
}