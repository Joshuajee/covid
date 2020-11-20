import React from 'react'
import Case from './Case'

function CountryCaseBar(props){
    let TotalConfirmed = Summary.Global.TotalConfirmed;
    let TotalRecovered = Summary.Global.TotalRecovered;
    let TotalDeaths = Summary.Global.TotalDeaths;
    let TotalActive = TotalConfirmed - TotalRecovered - TotalDeaths;

    let NewConfirmed = Summary.Global.NewConfirmed;
    let NewRecovered = Summary.Global.NewRecovered;
    let NewDeaths = Summary.Global.NewDeaths;
    //let NewActive = NewConfirmed - NewRecovered - NewDeaths;

    return(
        <div className="caseBar">
            <Case number ={TotalConfirmed} type = "Total Confirmed Case" color ="#000000" chart={true} />
            <Case number ={TotalRecovered} type = "Total Recovered Case" color ="#12f432" chart={true} />
            <Case number ={TotalActive} type = "Total Active Case" color ="#701722" chart={true} />
            <Case number ={TotalDeaths} type = "Total Death Case" color ="#ff0000" chart={true} />
            <Case number ={NewConfirmed} type = "Daily Confirmed Case" color ="#000000"/>
            <Case number ={NewRecovered} type = "Daily Recovered Case" color ="#12f432"/>
            <Case number ={NewDeaths} type = "Daily Death Case" color ="#ff0000"/>
        </div>
        )
}


export default CountryCaseBar