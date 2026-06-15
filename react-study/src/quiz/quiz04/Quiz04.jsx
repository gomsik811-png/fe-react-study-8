import { useState } from 'react';
import './Quiz04.css';


function Quiz04() {

    let textArr = ['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']
    let detailArr = ['내용자리', '내용자리', '내용자리']

    let title = 'React Study';
    return (
        <div>
            <div className='black-nav'>
                <h3>BLog Header</h3>
                {/* <div>React Study</div> */}
                <div style={{ color: "orange", fontSize: "23px" }}>{title}</div>
            </div>

            <div className='TextItem'>
                {
                    textArr.map((text, index) => {
                        return (
                            <Textitem
                                text={text} detail={detailArr[index]}  key={index} />
                        )
                    })
                }
            </div>

        </div>
    )
}


function Textitem({ text, detail }) {
    let [likeCount, setLikeCount] = useState(0);
    return (
        <div className='post-list'>
            <h4>{text}</h4>
            <h4 >{detail}<span onClick={() => {
                setLikeCount(likeCount + 1);
            }}>♥</span>{likeCount}</h4>
            
        </div>
    )
}

export default Quiz04;