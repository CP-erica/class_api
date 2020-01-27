import React from 'react'
import './Doctor.css'
import axios from 'axios'

import DoctorHeader from '../../components/Doctor/DoctorHeader'

import DoctorBody  from '../../components/Doctor/DoctorBody'

class Doctorget extends React.Component{

    state = {
        mydata : []
    }

    componentDidMount(){
       axios.get("http://localhost:3040/users").then(res=>{
        console.log(res)
        this.setState({mydata : res.data}) 
        }) 
        }
       
    render(){
         const mydata222 = this.state.mydata.map(hlists=>{
        return <DoctorBody name111={hlists.name} age111={hlists.age} 
        doctor_id={hlists._id}/>
    })
        

        }
}

export default Doctorget