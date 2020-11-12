import React ,{useState} from 'react'
import GraphUI from './GraphUI'


function Case(props){
    let show = false

    const [showChart, setShowChart] = useState(false);

    function showGraphUI() {
        setShowChart(true)
    }
    
    

    let bg = props.color
    let chart = props.chart

    let button = "hide"
    if(chart)
        button = "show  chart-btn"

    if(show === true){
        
        return(
            <div className="case" style = {{backgroundColor: bg}} > 
    
                <div>
                    {props.number}
                </div>
    
                <div>
                    {props.type}
                </div>
               <button onClick={showGraphUI} class={button}> View Chart </button>
                <GraphUI show={true} />
            </div>
        )
    }else
    return(
        <div className="case" style = {{backgroundColor: bg}} > 

            <div>
                {props.number}
            </div>

            <div>
                {props.type}
            </div>
            {showChart}
           <button onClick={showGraphUI} class={button}> View Chart  </button>

        </div>
      
    )
} 





export default Case