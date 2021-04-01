import React  from 'react'
import GraphPop from './GraphPop';


class Case extends React.Component{
   
    constructor(){
        super()
        this.state = {
            show : false
        }

        //Binds the events
        this.showChart = this.showChart.bind(this)
    }

    showChart(){

        this.setState(prevState => {

            return {
                show : prevState.show ? false : true
            }

        })

    }
    

    render(){

        let bg = this.props.color
        let chart = this.props.chart
        let show = this.state.show

        let button = "hide"
        if(chart)
            button = "show  chart-btn"

        if(show)
            
            return(
                <div className="case" style = {{backgroundColor: bg}} > 
        
                    <div>
                        {this.props.number}
                    </div>
        
                    <div>
                        {this.props.type}
                    </div>

                    <button onClick={this.showChart} className={button}> View Chart </button>
                    
                    

                    <GraphPop />

                </div>
            )

        return(
            <div className="case" style = {{backgroundColor: bg}} > 

                <div>
                    {this.props.number}
                </div>

                <div>
                    {this.props.type}
                </div>
     
            <button onClick={this.showChart} className={button}> View Chart  </button>
           
            </div>
        
        )

    }

} 





export default Case