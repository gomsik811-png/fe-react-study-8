import './Font03.css';

// function Quiz03() {
//     return (
//         <div className="App">
//             <div className='textItem'>
//                 <p className='title'>제목 : 하나</p>
//                 <p>내용 : 내용하나</p>
//             </div>
//             <div className='textItem'>
//                 <p className='title'>제목 : 둘</p>
//                 <p>내용 : 내용둘</p>
//             </div>
//             <div className='textItem'>
//                 <p className='title'>제목 : 셋</p>
//                 <p>내용 : 내용셋</p>
//             </div>
//             <div className='textItem'>
//                 <p className='title'>제목 : 넷</p>
//                 <p>내용 : 내용넷</p>
//             </div>
//             <div className='textItem'>
//                 <p className='title'>제목 : 다섯</p>
//                 <p>내용 : 내용다섯</p>
//             </div>
//         </div>
//     );

// }

function Textitem({text, detail}) {

    return(
        <div className='textItem'>
            <p className= "title">제목 : {text}</p>
            <p className='title'>내용 : {detail}</p>
        </div>


    )
}

function Quiz03(){
    let textArr = ['제목 : 하나', '제목 : 둘', '제목 : 셋', '제목 : 넷' , '제목 : 다섯']
    let detailArr = ['내용하나' , '내용둘', '내용셋', '내용넷', '내용 다섯']

    return(
    <div className='App'>
        {
            textArr.map((text,index)=>{
                return(
                    <Textitem text ={text} detail={detailArr[index]} key ={index}/>
                )
            })
        }
    </div>

    )
}

export default Quiz03;