import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal';

function NewsBlog() {


    //제목 내용
    //하드코딩(텍스트 직접) vs 변수 vs state변수
    let title = 'React Study'; // useState('React Study');


    let [news1, setNews1] = useState('어제의 뉴스');
    let [news2, setNews2] = useState('오늘의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['어제의 뉴스', '오늘의 뉴스', '내일의 뉴스']);

    let [likeCount, setLikeCount] = useState(0);
    //likeCount1 likeCount2 likeCount3

    let [likeCountArr, setLikeCountArr] = useState([0, 0, 0]);  //뉴스별 좋아요 갯수

    let [modalFlag, setModalFlag] = useState(false);

    //model 창에 전달한 선택한 뉴스 포스팅의 관련 정보
    let [selectedTitle, setSelectedTitle] = useState('');
    let [selectedLikeCount, setSelectedLikeCount] = useState(0);




    return (
        <div>
            <div className='black-nav'>
                <h3>Blog Header</h3>
                {/* <div>React Study</div> */}
                <div style={{ color: "orange", fontSize: "20px" }}>{title}</div>
            </div>



            {
                news.map((item, index) => {
                    return (
                        <div className='post-list' key={index}>
                            <h4 onClick={() => {
                                setModalFlag(!modalFlag);

                                setSelectedTitle(item);
                                setSelectedLikeCount(likeCountArr[index]);

                            }}>{news[index]} <span onClick={(event) => {
                                event.stopPropagation(); //이벤트 발생을 추가로 전파(전달)하는 것을 stop!

                                //배열에 존재하는 값 변경 -> 재렌더링
                                let temp = [...likeCountArr];
                                temp[index] += 1;
                                setLikeCountArr(temp);

                            }}>❤</span> {likeCountArr[index]}  </h4>
                            <p>내용자리</p>
                        </div>
                    )
                })
            }


            <button onClick={()=>{
                let temp = [...news];
                temp[0] = 'Today 긴급 속보';
                setNews(temp);
            }}>긴급제목변경</button>

            {
                /* modalFlag == true ?  <Modal/> : nul */
            }

            {
                modalFlag && <Modal  title={selectedTitle} likeCount={selectedLikeCount}
                                news={news} setNews={setNews} bgColor={'lightblue'} />
            }


        </div>
    )
}

export default NewsBlog;