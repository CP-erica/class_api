
import React from 'react'

class UpdateDoctor extends React.Component{
    render(){
        return(
            <form>
                <p><input type="text" name = "name"/></p>
                <p><input type="password" name = "password"/></p>
                <p><input type="submit" value = "click"/></p>

                
            </form>
        )
    }

}
export default UpdateDoctor
