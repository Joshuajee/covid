import {Redirect} from 'react-router-dom'

import React from 'react'
import TableRow from './TableRow'

//function to handle json data
function dataHandler(mydata, clickEvent){

    var data = []
    for (let i = 0; i < mydata.length; i++) {
        let totalActive = mydata[i].TotalConfirmed - mydata[i].TotalRecovered - mydata[i].TotalDeaths
        let newActive = mydata[i].TotalConfirmed - mydata[i].TotalRecovered - mydata[i].TotalDeaths
        
        data[i] = [mydata[i].Country, mydata[i].TotalConfirmed, 
                    mydata[i].TotalRecovered, mydata[i].TotalDeaths, 
                    totalActive, mydata[i].NewConfirmed, 
                    mydata[i].NewRecovered, mydata[i].NewDeaths, newActive, mydata[i].Slug] 
                
        }

      
        data.sort(function(a, b){
            return  b[1] - a[1]
        })


        for (let i = 0; i < data.length; i++) {

            data[i] = [i + 1, data[i]]
                    
        }

        return data.map(property => <TableRow table={property} clickEvent={clickEvent}  />)
}

class Table extends React.Component{

    constructor(){

        super()

        this.state = {
            sortByConfirmed:true,
            sortByRecoverd:false,
            sortByDeaths:false,
            sortByActive:false,
            sortByDailyConfirmed:false,
            sortByDailyRecovered:false,
            sortByDailyDeaths:false,
            sortByDailyActive:false,
            sortByCountry:false,
            redirect:false,
            link:"home"
        }
        /*
        this.countrySort = this.countrySort.bind(this)
        this.confirmedSort = this.confirmedSort.bind(this)
        this.recoveredSort = this.recoveredSort.bind(this)
        this.activeSort = this.activeSort.bind(this)
        this.deathSort = this.deathSort.bind(this)
        this.dailyConfirmedSort = this.dailyConfirmedSort.bind(this)
        this.dailyRecoveredSort = this.dailyRecoveredSort.bind(this)
        this.dailyRiseSort = this.dailyRiseSort.bind(this)
        this.dailyDeathsSort = this.dailyDeathsSort.bind(this)

*/
        this.clickEvent = this.clickEvent.bind(this)
    }

    countrySort(){

    }

    confirmedSort(){

    }

    recoveredSort(){

    }

    activeSort(){

    }

    deathSort(){

    }

    dailyRecoveredSort(){

    }

    dailyRiseSort(){

    }

    dailyDeathsSort(){

    }


    clickEvent(link){
        this.setState({
            link:link,
            redirect:true
        })
    }

 
    render(){

        if (this.state.redirect) {
            this.setState({
                redirect:false
            })
            return <Redirect to={this.state.link}/>;
          }
    
        return(
            <div className="tableWrapper">

                <table className="table"> 

                    <thead>

                        <tr>
                            <th>S/N</th>
                            <th >Country</th>
                            <th >Confirmed Case</th>
                            <th>Recovered Case</th>
                            <th>Active Case</th>
                            <th>Total Deaths</th>
                            <th>Daily Confirmed Case</th>
                            <th>Daily Recovered Case</th>
                            <th>Daily Rise in Cases </th>
                            <th>Daily Death Case</th>
                        </tr>

                    </thead>
                    
                    <tbody>
                        {dataHandler(this.props.data, this.clickEvent)}
                    </tbody>

                </table>

            </div>
        )

    }

}

export default Table