import { useState } from 'react';
import './Quiz06.css';

function Quiz06() {


    let [boxes, setBoxes] = useState(['red', 'blue', 'green', 'black', 'yellow', 'purple', 'orange']);
    
    return (
        <div>
            <div>
                <button onClick={() => { 
                    setBoxes( ['red', ...boxes] );
                }}>앞빨간박스추가</button>
                <button onClick={() => { 
                    setBoxes( ['blue', ...boxes] );
                }}>앞파란박스추가</button>
                <button onClick={() => { 
                    setBoxes( ['green', ...boxes] );
                }}>앞초록박스추가</button>

                <button onClick={() => { 
                    setBoxes( [ ...boxes, 'red'] );
                }}>뒤빨간박스추가</button>
                <button onClick={() => { 
                    setBoxes( [ ...boxes, 'blue'] );
                }}>뒤파란박스추가</button>
                <button onClick={() => { 
                    setBoxes( [ ...boxes, 'green'] );
                }}>뒤초록박스추가</button>
                <button onClick={() => { 
                    //unshift shift
                    let temp = [...boxes];
                    temp.shift();
                    setBoxes(temp);
                }}>앞박스삭제</button>
                <button onClick={() => { 
                    //push pop
                    let temp = [...boxes];
                    temp.pop();
                    setBoxes(temp);
                }}>뒤박스삭제</button>
            </div>


            {
                boxes.map((item, index)=>{
                    //return <div className='box' style={{backgroundColor:item}}></div>
                    return <ColorBox bgColor={item} index={index}/>
                })
            }
        </div>
    )

    function ColorBox({bgColor, index}){
    return(
        <div className="box" style={{backgroundColor:bgColor}}>
            <button onClick={()=>{
                let temp = [...boxes];
                temp.splice(index , 1);
                setBoxes(temp);
                
            }}>X</button>
        </div>
        


    )
}

    
}

export default Quiz06;