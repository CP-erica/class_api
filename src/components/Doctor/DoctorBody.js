    import React from 'react'
    import './Doctoreach.css'
    import axios from 'axios'
    import DoctorSingle from './DoctorSingle'
    import DoctorUpdate from './UpdateDoctor'
    import {NavLink, Route, Switch} from 'react-router-dom'

    class DoctorBody extends React.Component{
       
        state = {
            mydata : []
        }
    
        componentDidMount(){
           axios.get("http://localhost:3040/users").then(res=>{
            console.log(res)
            this.setState({mydata : res.data}) 
            }) 
            }

            DeleteDoctor = () =>{
                axios.delete("http://localhost:3040/"+ this.props._id)
    
            }
    
        render(){


            const mydata222 = this.state.mydata.map(hlists=>{
                return (
                <div className = "doctoreach">
                <div>{hlists.name}</div>
                <p>{hlists.age}</p>
                <NavLink to = {"/doctorSingle/"+hlists._id}>Doctor</NavLink>
                <NavLink to = {"/updateDoctor/"}>Update</NavLink>
                </div>
                )
                
                
            })

            
    
        return (

            <section>
            
                 {mydata222}


               
             
                <p><button onClick= {this.DeleteDoctor}>Delete</button></p>
            

            
            </section>
        )


        }
        }
    
    
    export default DoctorBody