import React from 'react'
import './Doctor.css'

import DoctorHeader from '../../components/Doctor/DoctorHeader'



class Doctor extends React.Component{

    render(){
        return(
            
            <section>
                <div className= "mydoctor">
                <p>This is doctor page...</p></div>
                <DoctorHeader/>
               
                
    
                </section>
    
            )
        }
    }


export default Doctor