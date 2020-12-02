import React from 'react'
import {Bar} from 'react-chartjs-2'


//Variables
var options;
var data;
var maxLength;
var dataLength = 20
var graphHeight = 50


function graphHandler(type, plotData, position, maxData){
    
    plotData.sort(function(a, b){
        return  b[1] - a[1]
    })


    var chartData = chop(plotData, position, maxData)

    
    data = {
        labels : chartData[0],
        datasets: [{
            label: "Countrires",
            backgroundColor: 'rgba(75, 192, 192, 1)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 2,
            data: chartData[1]
        }]
    }

    let start = position - maxData

    options = {
        title:{
            display:true,
            text: "Showing Top " + start + " to " + position + " Daily "+ type +" case by Country ",
            fontSize:15
        },
    }

}



function chop(data, postion, maxData){
    let data1 = []
    let data2 = []
    let start  = postion - maxData

    maxLength = data.length

    for(let i = 0; i < maxData; i++){
        data1[i] = data[i + start][0]
        data2[i] = data[i + start][1]
    }

    return [data1, data2]
}



class Graph extends React.Component{

    constructor(){
        super()

        if(window.innerWidth < 600){
            dataLength = 10
            graphHeight = 100
        }

        this.state = {
            position : dataLength,
            max: maxLength
        }

        
        //Binds the events
        this.handleEvent = this.handleEvent.bind(this)
    }

    //method for scrolling the chart
    handleEvent(event){

        const {name, value} = event.target

        this.setState({
                position : parseInt(value)
    
        })
    }
    
    render(){

        if(window.innerWidth < 600){
            dataLength = 10
            graphHeight = 100

        }

        graphHandler(this.props.type, this.props.data, this.state.position, dataLength)
        return(
            <div className="Graph">
                <div>
                    <Bar
                        width={100}
                        height={graphHeight}
                        data={data}
                        options={options}
                        />
                
                </div>
                <input 
                    type="range" min={dataLength} 
                    max={maxLength} 
                    value={this.state.position} 
                    step={1} 
                    onChange={this.handleEvent} />
            </div>
            )
     
    }

}

export default Graph