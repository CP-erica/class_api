import React from 'react'
import DoctorBody from './DoctorBody'
import TestDoctor from './TestDoctor'
import DoctorLogin from './DoctorLogin'
import DoctorSingle from './DoctorSingle'
import {Route, NavLink, Switch} from 'react-router-dom'




class DoctorHeader extends React.Component{
    render(){
    return(

        <div className="container">
      
        <NavLink to="/myhome">Home</NavLink>
        <NavLink to="/test">test</NavLink>
        <NavLink to="/login">Login</NavLink>
        
       
       <Switch>
        <Route path="/myhome" exact component={DoctorBody}/>
        <Route path="/test" exact component={TestDoctor}/>
        <Route path="/login" exact component={DoctorLogin}/>
        <Route path = "/doctorSingle/:id" exact component={DoctorSingle}/>
        
        </Switch>

       
       
       
        </div>
       
        )
}
}
export default DoctorHeader