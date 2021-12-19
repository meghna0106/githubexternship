import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './pages/Login'
import  Register from './pages/Register'

import Home from './pages/Home'
function App(){
    
 
return (<div>
    <h1>home here!</h1>
    <BrowserRouter> 
    <Route path="" exact component={Home}/>
    <Route path="/login" exact component={Login}/>
    <Route path="/register" exact component={Register}/>
    
     </BrowserRouter>
    
  
</div>
);


}
export default App