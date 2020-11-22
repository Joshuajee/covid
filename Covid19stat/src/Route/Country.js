import React from 'react'
import axios from 'axios'
//import CountryCaseBar from '../Components/CountryCaseBar'
import Loader from '../Components/Loader'
import GraphLine from '../Components/GraphLine'



var country = 0
var confirmed = []
var recovered = []
var deaths = []
var active = []

class Country extends React.Component{

    constructor(){
        super()
        this.state={
            isLoading : true
        }

    }
   
    

    //sends an api request when the components mount
    componentDidMount(){

        let uri = "/api" + window.location.pathname
        axios.get(uri).then(({data}) =>{
   
            

            for(let i = 0; i < data.length; i++){
                confirmed[i] = data[i].Confirmed
                recovered[i] = data[i].Recovered
                deaths[i] = data[i].Deaths
                active[i] = data[i].Active
            }
            console.log(active)
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
                    <br/>
                active
                   {active}
                   <br/>
                confirmed
                   {confirmed}
                   <br/>
                deaths
                   {deaths}
                   <br/>
                recovered
                   {recovered}
                   <br/>
                    
                </div>
            </div>
        )

    }

}


/*
<GraphLine data type="Confirmed"/>
                    <GraphLine type="Recovered"/>
                    <GraphLine type="Active"/>
                    <GraphLine type="Death"/>*/
                                

export default Country