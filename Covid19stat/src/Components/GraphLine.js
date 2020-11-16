import React from 'react'
import {Bar} from 'react-chartjs-2'

var options;
var data;
var maxLength;

function graphHandler(type, maxData = 30){
    
    const mydata = TableData.Countries

    let dataCase = []
    let dataLabel = []
    let sortCase = []
    let count = 0

    for(let i = 0; i < mydata.length; i++){

        switch(type){
            case "Confirmed":
                if(mydata[i].NewConfirmed !== 0){
                    sortCase[count] = mydata[i].NewConfirmed
                    dataCase[count] = mydata[i].NewConfirmed
                    dataLabel[count] = mydata[i].Country
                    count++
                }
            break
            case "Recovered":
                if(mydata[i].NewRecovered !== 0){
                    sortCase[count] = mydata[i].NewRecovered
                    dataCase[count] = mydata[i].NewRecovered
                    dataLabel[count] = mydata[i].Country
                    count++
                }
            break
            case "Death":
                if(mydata[i].NewDeaths !== 0){
                    sortCase[count] = mydata[i].NewDeaths
                    dataCase[count] = mydata[i].NewDeaths
                    dataLabel[count] = mydata[i].Country
                    count++
                }
            break
            default:
                break
           
        }

    }

    let datab = [dataCase, dataLabel]

    sortCase.sort(function(a, b){
        return  b - a
    })

    let newSortedData = ReShape(Swap(datab, sortCase), maxData)

    data = {
        labels : newSortedData[1],
        datasets: [{
            label: "Country",
            backgroundColor: 'rgba(75, 192, 192, 1)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 2,
            data: newSortedData[0]
        }]
    }

    let start = maxData - 30

    options = {
        title:{
            display:true,
            text:"Showing Top " + start + " to " + maxData + " Daily "+ type +" case by Country",
            fontSize:20
        },
        legend:{
            display:false,
            position: 'top'
        }
    }

}

function Swap(data, sortedData){
    let dataR = []

    for(let i = 0; i < data[0].length; i++){

        for(let x = 0; x < data[0].length; x++){
            if(sortedData[i] ===  data[0][x]){
                dataR[i] = [sortedData[i], data[1][x]]
            }
        }
        
    }

    return dataR
}


function ReShape(data, count, max = 30){
    let data1 = []
    let data2 = []
    let counter = 0
    maxLength = data.length
    for(let i =  0; i < data.length; i++){
        data1[i] = data[i + count - max][0]
        data2[i] = data[i + count - max][1]
        counter++

        if(counter >= count) break

    }

    return [data1, data2]
}



class GraphLine extends React.Component{

    constructor(){
        super()
        this.state = {
            close : "show",
            position : 30,
            max: maxLength
        }

        
        //Binds the buttons
        this.close = this.close.bind(this)
        this.buttonForward = this.buttonForward.bind(this)
        this.buttonBackward = this.buttonBackward.bind(this)
    }

    
    

    close() {
        this.setState({ close : "hide" })
    }

    //method for scrolling backward
    buttonForward(){

        this.setState(prevState => {
            if(prevState.position === maxLength){
                alert("MAAAAAX")
            }

            return {
                position : prevState.position + 1
            }
        })

            
        graphHandler(this.props.type, this.state.position)
    }

    //method for scrolling backward
    buttonBackward(){

    this.setState(prevState => {
        return {
            position : prevState.position - 1
        }
    })

            
        graphHandler(this.props.type, this.state.position)
    }


    
    render(){
        graphHandler(this.props.type, this.state.position)
        return(
            <div className="Graph">
                <div>
                    <Bar  
                        data={data}
                        options={options}
                        />
                
                </div>
                
            </div>
            )
     
    }

}

export default GraphLine

