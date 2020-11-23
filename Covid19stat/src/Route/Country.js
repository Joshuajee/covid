import React from 'react'
import axios from 'axios'
import Loader from '../Components/Loader'
import GraphLine from '../Components/GraphLine'
import CountryCaseBar from '../Components/CountryCaseBar'
import Navbar from '../Components/NavBar'
import Footer from '../Components/Footer'


var confirmed = []
var recovered = []
var deaths = []
var active = []
var date = []
var country = ""

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
            country = data[0].Country
            
            for(let i = 0; i < data.length; i++){

                confirmed[i] = data[i].Confirmed
                recovered[i] = data[i].Recovered
                deaths[i] = data[i].Deaths
                active[i] = data[i].Active
                date[i] = data[i].Date
                

            }

            this.setState({
                isLoading : false
            })

        })

    }


    render(){

        if(this.state.isLoading)
            return(<Loader />)

        return(<div>
                    <Navbar />
                    <div className="container">
                        <div className="stat-bar">{country} Info</div>
                        <CountryCaseBar 
                            confirmed={confirmed}
                            recovered={recovered}
                            active={active}
                            deaths={deaths}
                        
                            />

                        <div className="Graph-Wrapper">

                            <GraphLine 
                                data={confirmed} 
                                date={date} 
                                type="Confirmed"
                                />

                            <GraphLine 
                                data={recovered} 
                                date={date} 
                                type="Recovered"
                                />

                            <GraphLine 
                                data={active} 
                                date={date} 
                                type="Active"
                                />

                            <GraphLine 
                                data={deaths} 
                                date={date} 
                                type="Deaths"
                                />
                            
                        </div>

                    </div>

                    <Footer />

                </div>

        )

    }

}

export default Country