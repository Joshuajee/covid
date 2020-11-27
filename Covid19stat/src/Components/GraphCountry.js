import React from 'react'
import {Bar} from 'react-chartjs-2'


//variables
var options;
var data;
var maxLength;


function graphHandler(type, plotData, plotDate, position, maxData = 20, countryName=""){

    //plotDate.sort()

    var chartData = chop(plotData, plotDate, position, maxData)

    data = {
        labels : chartData[1],
        datasets: [{
            label: "Country",
            backgroundColor: 'rgba(75, 192, 192, 1)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 2,
            data: chartData[0]
        }]
    }

    let start = position - maxData

    options = {
        title:{
            display:true,
            text: "Showing culmulative " + start + " to day " + position + " " + type + " case in "+ countryName,
            fontSize:15
        },
        legend:{
            display:false,
            position: "top"
        }
    }

}



function chop(data, date, postion, maxData){
    
    let data1 = []
    let data2 = []
    let start  = postion - maxData

    maxLength = data.length

    for(let i = 0; i < maxData; i++){
        data1[i] = data[i + start]
        data2[i] = date[i + start]
    }
    return [data1, data2]
}



class GraphCountry extends React.Component{

    constructor(){
        super()
        this.state = {
            close : "show",
            position : 20,
            max: maxLength
        }
        
        //binds the events
        this.close = this.close.bind(this)
        this.handleEvent = this.handleEvent.bind(this)

    }

    close() {
        this.setState({ close : "hide" })
    }

    //method for scrolling the chart
    handleEvent(event){

        const {name, value} = event.target

        this.setState({
                position : parseInt(value)
        })
    }

    //method for positioning the chart at the end
    componentDidMount(){
        this.setState({
            position : parseInt(maxLength)
        })
    }

  
    render(){

        graphHandler(this.props.type, this.props.data, this.props.date, this.state.position, 20, this.props.countryName)

        return(
            <div className="Graph">

                <Bar
                    data={data}
                    options={options} />

                <input 
                    type="range" 
                    min={20} 
                    max={maxLength} 
                    value={this.state.position} 
                    step={1} 
                    onChange={this.handleEvent} />

            </div>
            )
     
    }

}

export default GraphCountry