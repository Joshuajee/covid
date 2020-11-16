import React from 'react'
import axios from 'axios'

import '../Styles/Loader.css'

import CaseBar from '../Components/CaseBar'
import Table from '../Components/Table'
import Graph from '../Components/Graph'
//import GraphUI from '../Components/GraphUI';
import Loader from '../Components/Loader'
import Failed from '../Components/Failed'
import Navbar from '../Components/NavBar'
import Footer from '../Components/Footer'


var countries = []
var global = []

class Home extends React.Component{

    constructor(){
        super()
        this.state={
            isLoading : true,
            failed : false
        }

       
    }
    

     //sends an api request when the components mount
     componentDidMount(){

        let uri = "/api/home"

        axios.get(uri).then(({data}) =>{
            
            global = data.response.Global
            countries = data.response.Countries

            this.setState({
                isLoading : false
            })

        }).catch(error => {

            this.setState({
                isLoading : false,
                failed : true

            })
        })
    }


   
    render(){
        if(this.state.isLoading)
            return(<Loader />)
        if(this.state.failed)
            return(<Failed />)
        return(<div>
                    <Navbar />
                    <div className="container">
                        <div className="stat-bar">World Info</div>
                        <CaseBar data={global} />
                        
                        <div className="Graph-Wrapper">
                            <Graph data={data("Confirmed")} type={"Confirmed"}/>
                            <Graph data={data("Deaths")} type={"Deaths"}/>
                            <Graph data={data("Recovered")} type={"Recovered"}/>
                            <Graph data={data("Active")} type={"Active"}/>
                        </div>

                        <Table data={countries} />
                        
                    </div>
                    <Footer />
            </div>
        )

    }

}

//


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