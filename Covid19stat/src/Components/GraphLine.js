import React from 'react'
import {Bar} from 'react-chartjs-2'


//Variables
var options;
var data;
var maxLength;


function graphHandler(type, plotData, position, maxData = 20){
    
    plotData.sort(function(a, b){
        return  b[1] - a[1]
    })


    var chartData = chop(plotData, position, maxData)

    
    data = {
        labels : chartData[0],
        datasets: [{
            label: "Country",
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
        legend:{
            display:false,
            position: "top"
        }
    }

}



function chop(data, postion, maxData){
    let data1 = []
    let data2 = []
    let start  = postion - maxData
    console.log(postion)
    maxLength = data.length

    for(let i = 0; i < maxData; i++){
        data1[i] = data[i + start][0]
        data2[i] = data[i + start][1]
    }

    return [data1, data2]
}



class GraphLine extends React.Component{

    constructor(){
        super()
        this.state = {
            close : "show",
            position : 20,
            max: maxLength
        }

        
        //Binds the events
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
    
    render(){
        graphHandler(this.props.type, this.props.data, this.state.position)
        return(
            <div className="Graph">
                <div>
                    <Bar
                        data={data}
                        options={options}
                        />
                
                </div>
                <input 
                    type="range" min={20} 
                    max={maxLength} 
                    value={this.state.position} 
                    step={1} 
                    onChange={this.handleEvent} />
            </div>
            )
     
    }

}

export default GraphLine