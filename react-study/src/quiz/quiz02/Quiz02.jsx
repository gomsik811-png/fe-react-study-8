import { useState } from "react";


function Quiz02(){

    let arr =['하나', '둘', '셋'];
    let [ma , mama] = useState(0);

    return(

        <div style={{textAlign: 'center'}}>
            <p>{arr[ma]}</p>
            <button onClick={()=>{
                if(ma == 2){
                    mama(0);
                } else {
                    mama(ma+1);
                }
            }}>변경버튼</button>

        </div>



    )

};

export default Quiz02;