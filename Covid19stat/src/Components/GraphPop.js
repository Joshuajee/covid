import React, {useState} from 'react'
import Loader from './Loader';
//import {Line} from 'react-chartjs-2'



class GraphPop extends React.Component{

    constructor(){
        super()
        this.state = {
            close: "show"
        }

        this.closeChart = this.closeChart.bind(this)
    }

    closeChart(){
        this.setState({ close : "hide" })
    }

    render(){
     
        return(

            <div className={"GraphModal " + this.state.close}>

                    <button 
                        className="close" 
                        onClick={this.closeChart}> 
                        X 
                    </button>
                    
                    <div>
                        <Loader />
                    </div>

            </div>
            
            )
    }

    }


export default GraphPop