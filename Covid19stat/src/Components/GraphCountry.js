import React from 'react'
import {Bar} from 'react-chartjs-2'



//variables
var options;
var data;
var maxLength;
var dataLength = 30
var graphHeight = 50


function graphHandler(type, plotData, plotDate, position, maxData, countryName=""){

    var chartData = chop(plotData, plotDate, position, maxData)

    data = {
        labels : chartData[1],
        datasets: [{
            label: countryName,
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
        

        if(window.innerWidth < 600){
            dataLength = 10
            graphHeight = 100
        }

        this.state = {
            close : "show",
            position : dataLength,
            max: maxLength
        }
        
        //binds the events
        this.handleEvent = this.handleEvent.bind(this)

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

        if(window.innerWidth < 600){
            dataLength = 10
            graphHeight = 100
        }

        graphHandler(this.props.type, this.props.data, this.props.date, this.state.position, dataLength, this.props.countryName)

        return(
            <div className="Graph">

                <Bar
                    className="chart"
                    width={100}
                    height={graphHeight}
                    data={data}
                    options={options} />

                <input 
                    type="range" 
                    min={dataLength} 
                    max={maxLength} 
                    value={this.state.position} 
                    step={1} 
                    onChange={this.handleEvent} />


          

            </div>
            )
     
    }

}

export default GraphCountry