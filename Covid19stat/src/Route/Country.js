import React from 'react'
import axios from 'axios'
//import CountryCaseBar from '../Components/CountryCaseBar'
import Loader from '../Components/Loader'
//import GraphLine from '../Components/GraphLine'

var country = 0

class Country extends React.Component{

    constructor(){
        super()
        this.state={
            isLoading : false
        }
    }


    //sends an api request when the components mount
    componentDidMount(){
        let uri = "/api/country"
        axios.get(uri).then(({data}) =>{
            country = data
            this.setState({
                isLoading : false
            })
        })
    }


    render(){

        if(this.state.isLoading)
            return(<Loader />)
        return(
            <div className="container">
                
                <div className="Graph-Wrapper">

                   
                                
                </div>
            </div>
        )

    }

}
/*
<GraphLine type="Confirmed"/>
<GraphLine type="Recovered"/>
<GraphLine type="Active"/>
<GraphLine type="Death"/>*/
            //<CountryCaseBar />
export default Country