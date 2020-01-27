import React from 'react'
import axios from 'axios'



class DoctorSingle extends React.Component{
  state = {
    doctor_data: []
  }

  componentDidMount(){
    axios.get("https://localhost/3040/users/single/" + 
    this.props.match.params.id).then(res=>{
      console.log(res)
    this.setState({doctor_data : res.data})
  })
}
  
    render(){
    
        return (

            
            <div>
              {this.props.match.params.id}
            </div>
        )

            
}
}
export default DoctorSingle