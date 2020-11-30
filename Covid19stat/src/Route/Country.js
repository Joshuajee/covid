import React from 'react'
import axios from 'axios'
import Loader from '../Components/Loader'
import GraphCountry from '../Components/GraphCountry'
import GraphLine from '../Components/GraphLine'
import CountryCaseBar from '../Components/CountryCaseBar'
import Navbar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Failed from '../Components/Failed'


var confirmed = []
var recovered = []
var deaths = []
var active = []
var date = []

var confirmed_daily = []
var recovered_daily = []
var deaths_daily = []
var active_daily = []
var date_daily = []

var country = ""

class Country extends React.Component{

    constructor(){
        super()
        this.state={
            isLoading : true,
            failed: false
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
                date[i] = data[i].Date.substring(0, 10)
                
            }

            confirmed.sort(function(a, b){
                return  b - a
            })
        
            recovered.sort(function(a, b){
                return  b - a
            })

            deaths.sort(function(a, b){
                return  b - a
            })

            active.sort(function(a, b){
                return  b - a
            })

            date.sort()
            for(let i = 1; i < data.length; i++){

                confirmed_daily[i - 1] = confirmed[i - 1] - confirmed[i]
                recovered_daily[i - 1] = recovered[i - 1] - recovered[i]
                deaths_daily[i - 1] = deaths[i - 1] - deaths[i]
                active_daily[i - 1] = active[i - 1] - active[i]
                date_daily[i - 1] = date[i].substring(0, 10)
                
            }

            this.setState({
                isLoading : false,
                failed : false
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
                        <div className="stat-bar">{country} Info</div>
                        <CountryCaseBar 
                            confirmed={confirmed}
                            recovered={recovered}
                            active={active}
                            deaths={deaths}
                        
                            />

                        <div className="Graph-Wrapper">

                            <GraphCountry
                                data={confirmed} 
                                date={date} 
                                type="Confirmed"
                                countryName={country}
                                />

                            <GraphCountry
                                data={recovered} 
                                date={date} 
                                type="Recovered"
                                countryName={country}
                                />

                            <GraphCountry
                                data={active} 
                                date={date} 
                                type="Active"
                                countryName={country}
                                />

                            <GraphCountry
                                data={deaths} 
                                date={date} 
                                type="Deaths"
                                countryName={country}
                                />
                            
                            <GraphLine
                                data={confirmed_daily} 
                                date={date_daily} 
                                type="Confirmed"
                                countryName={country}
                                />

                            <GraphLine 
                                data={recovered_daily} 
                                date={date_daily} 
                                type="Recovered"
                                countryName={country}
                                />

                            <GraphLine 
                                data={active_daily} 
                                date={date_daily} 
                                type="Active"
                                countryName={country}
                                />

                            <GraphLine 
                                data={deaths_daily} 
                                date={date_daily} 
                                type="Deaths"
                                countryName={country}
                                />
                            
                        </div>

                    </div>

                    <Footer />

                </div>

        )

    }

}

export default Country