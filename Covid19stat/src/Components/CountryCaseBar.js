import React from 'react'
import Case from './Case'

function CountryCaseBar(props){

    let confirmed = props.confirmed
    let recovered = props.recovered
    let active = props.active
    let deaths = props.deaths

    confirmed.sort(function(a, b){
        return  a - b
    })

    recovered.sort(function(a, b){
        return  a - b
    })

    active.sort(function(a, b){
        return  a - b
    })

    deaths.sort(function(a, b){
        return  a - b
    })

    let dailyConfirmed = confirmed[confirmed.length - 1] - confirmed[confirmed.length - 2]
    let dailyRecovered = recovered[recovered.length - 1] - recovered[recovered.length - 2]
    //let dailyActive = active[active.length - 1] - active[active.length - 2]
    let dailyDeaths = deaths[deaths.length - 1] - deaths[deaths.length - 2]

    return(
        <div className="caseBar">

            <Case number ={confirmed[confirmed.length - 1]} type = "Total Confirmed Case" color ="#000000"  />
            <Case number ={recovered[recovered.length - 1]} type = "Total Recovered Case" color ="#12f432" />
            <Case number ={active[active.length - 1]} type = "Total Active Case" color ="#701722" />
            <Case number ={deaths[deaths.length - 1]} type = "Total Death Case" color ="#ff0000" />
            <Case number ={dailyConfirmed} type = "Daily Confirmed Case" color ="#000000" />
            <Case number ={dailyRecovered} type = "Daily Recovered Case" color ="#12f432" />
            <Case number ={dailyDeaths} type = "Daily Death Case" color ="#ff0000" />
        

        </div>
        )
}


export default CountryCaseBar