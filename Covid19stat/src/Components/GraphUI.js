import React, {useState} from 'react'
import Loader from './Loader';
//import {Line} from 'react-chartjs-2'



function GraphUI (props){

    const [showChart, setShowChart] = useState(props.show);
    const [Loader, setIsLoading] = useState("show");

    function showGraphUI() {
        setShowChart("show")
    }

    if(props.show === true){
        setShowChart("show")
    }
    
    function hideGraphUI(){
        setShowChart("hide")
    }
        return(
            <div className={"GraphModal " + showChart}>
                    <button className="close" 
                    onClick={hideGraphUI}> X </button>
                    {props.show}
                <Loader display ={Loader} />
            </div>
            
            )
}


export default GraphUI