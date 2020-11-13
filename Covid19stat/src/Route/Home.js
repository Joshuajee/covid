import React from 'react'
import axios from 'axios'

import '../Styles/Loader.css'

import CaseBar from '../Components/CaseBar'
import Table from '../Components/Table'
import Graph from '../Components/Graph'
import GraphUI from '../Components/GraphUI';
import Loader from '../Components/Loader'


var countries = []
var global = []

class Home extends React.Component{

    constructor(){
        super()
        this.state={
            isLoading : true
        }

       
    }


    //sends an api request when the components mount
    componentDidMount(){
        let uri = "/api/home"
        axios.get(uri).then(({data}) =>{
            global = data.Global
            countries = data.Countries
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
                <div className="stat-bar">World Info</div>
                <CaseBar data={global} />
                <div className="Graph-Wrapper">
                   
                </div>

                <Table data={countries} />
               
            </div>
        )

    }

}



function data(type){
    let count = 0
    let output = []
    for(let i = 0; i < countries.length; i++){
        switch(type){
            case "Confirmed":
                output[count] = [countries[i].Country, countries[i].NewConfirmed]
            break
            case "Deaths":
                output[count] = [countries[i].Country, countries[i].NewDeaths]
            break
            case "Recovered":
                output[count] = [countries[i].Country, countries[i].NewRecovered]
            break
            case "Active":
                output[count] = [countries[i].Country, countries[i].NewConfirmed - countries[i].NewDeaths - countries[i].NewRecovered]
            break
            default:
                break
        }
        
        count++
    }
    return output
}

export default Home