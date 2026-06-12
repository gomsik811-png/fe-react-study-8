import { useState } from "react";
import './Quiz01.css'

function Quiz01(){

    let [ du, dudu] = useState(0);


    return(
    
        <div>
            <button on onClick={()=>{

                dudu(du+2);
            }}>짝수출력</button>
            <span className="red">{du}</span>
        </div>
    )

}

export default Quiz01;