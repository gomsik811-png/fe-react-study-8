import { useState } from "react";
import './Quiz04.css';


function Quiz04() {

    //let [box, addbox] = useState( [<div className="box"></div>,  <div className="box"></div>]);
    //let [arr, setArr] = useState([1,2]);
    let [cnt,setCnt] =useState(0);

    return (
        <div>
            
            <div style={{margin:'10px'}}>
                <button onClick={()=>{
                    //let temp = [...arr, arr.length+1];
                    //temp.push( temp);
                    //setArr(temp);
                    setCnt(cnt+1);
                }}>추가</button>
            </div>

            <div>
                {
                // arr.map((item,index)=>{
                //     return <div className="box" key ={index}>박스</div>
                // })

                // arr.map( (value)=>{
                //     console.log(value);
                //     return <div className="box" key ={value}>박스</div>
                // })
                [...Array(cnt)].map ( (_ , index)=>{
                    return <div className="box" key ={index}>박스</div>
                })
                }
            </div>




        </div>
    )

}


export default Quiz04;