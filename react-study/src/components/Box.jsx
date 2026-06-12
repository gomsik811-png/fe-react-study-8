

// //  <Box title={arr[0]} msg={detail[0]}/>
// // props == { title:"아침" msg:"졸리다" };

//     // return (
//     // <div>
//     //     <h2>Box입니다.</h2>
//     // </div>
//     // )

// //  <Box title={arr[0]} msg={detail[0]}/>
// // props == { title:"아침" msg:"졸리다" }
// function Box(props){
//     //props : 컴퍼넌트 내부에 필요로하는 매개변수 전달받기

// return (


//     <div style={ {backgroundColor:'lightgreen'} }>
//                 <h1>{props.text}</h1>
//                 <p>{props.detail}</p>
//             </div>
// )




// }

function Box({text, detail} ){
    //props : 컴퍼넌트 내부에 필요로하는 매개변수 전달받기

return (


    <div style={ {backgroundColor:'lightgreen'} }>
                <h1>{text}</h1>
                <p>{detail}</p>
            </div>
)




}

export default Box;