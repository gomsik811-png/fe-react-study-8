import { useState } from 'react';
import './Quiz06.css';
import ColorBox from './ColorBox';

function Quiz06() {

    let color = ['red', 'blue', 'green'];

    let [box, setBox] = useState([color[0],color[1],color[2],'black']);

    let picachu = ['앞빨간박스추가','앞파란박스추가','앞초록박스추가']

    return (
        <div>

            <button onClick={() => {
                setBox([color[0], ...box]);
            }}>{picachu[0]}</button>

            <button onClick={() => {
                setBox([color[1], ...box]);
            }}>{picachu[1]}</button>

            <button onClick={() => {
                setBox([color[2], ...box]);
            }}>{picachu[2]}</button>

            <button onClick={() => {
                setBox([...box, color[0]]);
            }}>뒤빨간박스추가</button>

            <button onClick={() => {
                setBox([...box, color[1]]);
            }}>뒤파란박스추가</button>

            <button onClick={() => {
                setBox([...box, color[2]]);
            }}>뒤초록박스추가</button>

            <button onClick={() => {
                let temp = [...box];
                temp.shift();
                setBox(temp);
            }}>앞 박스 삭제</button>

            <button onClick={() => {
                let temp = [...box];
                temp.pop();
                setBox(temp);
            }}>뒤 박스 삭제</button>

            <hr />

            //</div>{/* {
                box.map((item, index) => {
                    return (
                        <div
                            key={index}
className="box"style={{ backgroundColor: item }}></div>
                    );
                })
            } *///}
    {
            box.map((item, index)=>{
                return(<ColorBox bgColor={item} />
                )
            })
        
    }
    <div/>
    );
}

export default Quiz06;