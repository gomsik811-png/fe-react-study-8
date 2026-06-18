import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import './Detail.css';

function Detail({ foods }) {
    //Detail 페이지에서 보여줄 상품정보

    // 접속path = /detail/:id
    // /detail/fd000    /detail/fd001

    // :id 위치에 넘어온 값이 무엇이냐? ---> foods 데이터 id 가 동일한 상품 찾기


    //--------------------------------------


    /*
        useEffect(실행함수, 의존성배열)
        useEffect(실행함수, [])
        useEffect(실행함수)

        useEffect(실행함수{
            return()=>{clean up function}
        }, 의존성배열)

    */

    let [orderCount, setOderCount] = useState(0);
    let [test, setTest] = useState(0);

    useEffect(() => {
        console.log('useEffect 함수 실행 (의존성 배열 없음)')
    })  //의존성배열X -> 로딩될때마다 매번 실행

    useEffect(() => {
        console.log('useEffect 함수 실행 [] 빈배열 의존')
    }, [])// 빈배열 -> 생성/로딩시 1회 실행

    useEffect(() => {
        console.log('useEffect 함수 실행 [orderCount] 의존성 배열')
        console.log('useEffect[orderCOunt] : ' + orderCount);
        return () => {
            console.log('useEffect[orderCount] -> return () 실행');
        }
    }, [orderCount])// 의존성 배열에 존재하느 값 -> 참고

    useEffect(() => {
        console.log('useEffect 함수 실행 [test] 의존성 배열')
    }, [test])// 의존성 배열에 존재하느 값 -> 참고

    useEffect(() => {
        console.log('useEffect 함수 실행 [test,orderCount] 의존성 배열')
    }, [test, orderCount])// 의존성 배열에 존재하느 값 -> 참고




    let [viewStatus, setViewStatus] = useState('');

    useEffect(() => {
        // setViewStatus('end');
        setTimeout(() => {
            setViewStatus('end');
        }, 500)

    }, [])

    let [modalShow, setModalShow] = useState(true); //모달창 표시 여부 true/false


    //-----------------------------------------
    useEffect(() => {
        //mddalShow state변수 true -> false
        setTimeout(() => {
            setModalShow(false);
        }, 2000)
        //2초후 자동 닫기
    }, [])

    useEffect(() => {

        //setTimeout
        //setInterval
        //비동기방식

        //clearTimeout
        //clearInterval

        const interv = setInterval(() => {
            console.log('interval');
        }, 1000)

        //cleanup function
        return () => {
            clearInterval();
        }

    }, [orderCount])




    //경로에 있는 값을 읽어오기
    let { id } = useParams();
    console.log(id);

    //detail/:id    

    //id확인 ->foods 배열 데이터 id 값 같은 food 데이터 찾기 -> food 화면에 푯; (imPath, title, content, price)

    //filter
    let food = foods.find((item) => {
        return item.id == id;
    })

    let foodIndex = foods.findIndex((item) => {
        return item.id == id;
    })
    // foods[foodIndex].title
    // foods[foodIndex].content

    let navigate = useNavigate();

    //해당하는 id의 상품이 없으면? 필터링

    if (food == undefined || food == null) {
        return (
            <div>
                <h1>없어 그거</h1>
                <h2>있는거 검색해</h2>
                <Button variant="info" onClick={() => {
                    navigate("/");
                }}>홈으로 돌아가기</Button>
            </div>
        )

    }
    let gogiWanja;

    if (food.stockCount == 0) {
        gogiWanja = <Button variant="danger" disabled="true">품절</Button>
    } else {
        gogiWanja = <Button variant="primary">주문하기</Button>
    };

    //---------------------------------------------

    //스타일 적용

    /*
    조건에 따라서 스타일 적용
    가격표시
        1만원 이상 -> 빨간색
        1만원 미만 -> 파란색


        1) js 객체
        <p>style={{colot: 'red', fontSize:'20px' } }</p>
            // {color: 'red'}        {color: 'blue'}

        <p style={priceTextStyle}>{food.price}</p>
        <p style={{color: food.price >= 10000 ? 'red' : 'blue'}}>{food.price}</p>

        2)
        <p style={priceTextStyleFunc(food.price)}>{food.price}</p>

        3) 
        //클래스 이름 단일
        <p className={ food.price >= 10000 ? 'price-red' : 'price-blue'}>{food.price}</p>
        <p className={ 'text-strong ' + (food.price >= 10000 ? 'price-red' : 'price-blue') }>{food.price}</p>


        // className=속성값 에 들어가는 변수 형태로도 활용
        <p className={ 'text-strong ' + (food.price >= 10000 ? 'price-red' : 'price-blue') }>{food.price}</p>
        <p className={ 'text-strong ' + priceTextClassName }>{food.price}</p>
                

        // 배열단위로 관리 join 함수 활용
        ['text-strong', 'price-red'].join(" ") -> 'text-strong price-red'
        ['text-strong', 'price-red'].join("/") -> 'text-strong/price-red'
        <p className={ ['text-strong', (food.price >= 10000 ? 'price-red' : 'price-blue')].join(" ") }>{food.price}</p>

        //백틱문자 활용 ``````
        <p className={ `text-strong  ${priceTextClassName}` }>{food.price}</p>
        <p className={ `text-strong ${(food.price >= 10000 ? 'price-red' : 'price-blue')}` }>{food.price}</p>

        4) css class + useState + useEffect 조합 활용 -> 효과 발생

        let [viewStatus, setViewStatus] = useState('');

useEffect(() => {
    // setViewStatus('end');
    setTimeout(() => {
        setViewStatus('end');
    }, 500)

}, [])

        <Container className={"start " + viewStatus}>

        5) js 객체로 내부에서 스타일 정의 후 사용

    */

    const styles = {

        redStyle : {color : 'red' },        //styles.redStyle
        blueStyle : {color : 'blue'},       //styles.redSrtle
        fontBigBold : {                     //styles.dontBigBild
            fontSize : '36px',
            fontWeight : 'bold'
        },

        titleStyle : {
            paddingTop :'30px',
            fontSize : '40px',
            fontWeight : 'bold'
        }

    }

    const priceTextStyleFunc = (price) => {
        if (price >= 10000) {
            return { color: 'red' };
        } else {
            return { color: 'blue' };
        }
    }


    const priceTextStyle = {
        color: food.price >= 10000 ? 'red' : 'blue'
    }

    const priceTextClassName = (food.price >= 10000 ? 'price-red' : 'price-blue');

    //------------------------------

    return (

        // <div class="box big container red">
        <Container className={"start " + viewStatus}>
            <Row>
                <Col md={6}>
                    <img src={import.meta.env.BASE_URL + food.imgPath} style={{ width: '100%' }} />
                </Col>
                <Col md={6}>
                    <h4 style={{ paddingTop: '30px' }}>{food.title}</h4>
                    <h4 style={styles.titleStyle}>{food.title}</h4>
                    <p style={styles.fontBigBold}>{food.content}</p>
                    <p>{food.price}</p>
                    <p style={priceTextStyle}>{food.price}</p>
                    <p style={{ color: food.price >= 10000 ? 'red' : 'blue' }}>{food.price}</p>
                    <p style={priceTextStyleFunc(food.price)}>{food.price}</p>

                    <p className={food.price >= 10000 ? 'price-red' : 'price-blue'}>{food.price}</p>
                    <p className={'text-strong ' + (food.price >= 10000 ? 'price-red' : 'price-blue')}>{food.price}</p>
                    <p className={'text-strong ' + priceTextClassName}>{food.price}</p>
                    <p className={['text-strong', (food.price >= 10000 ? 'price-red' : 'price-blue')].join(" ")}>{food.price}</p>
                    <p className={`text-strong  ${priceTextClassName}`}>{food.price}</p>
                    <p className={`text-strong ${(food.price >= 10000 ? 'price-red' : 'price-blue')}`}>{food.price}</p>







                    <p>수량은 {food.stockCount}개</p>

                    <p>
                        <Button variant="dard" onClick={() => {
                            if (orderCount > 0) {
                                setOderCount(orderCount - 1)
                            }
                        }}>-</Button>
                        <span> {orderCount} </span>
                        <Button variant="dard" onClick={() => {
                            if (orderCount < food.stockCount) { setOderCount(orderCount + 1) }
                            console.log('onClick() : ' + orderCount);
                        }}>+</Button>
                    </p>

                    {gogiWanja}
                </Col>

            </Row>

            <Modal
                show={modalShow}
                onHide={() => { setModalShow(false); }}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        어서오세요~
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Food Good!!!</h4>
                    <p>
                        구찌갱 구찌갱 갱 갱 GUCCI
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => { setModalShow(false); }}>Close</Button>
                </Modal.Footer>
            </Modal>


        </Container>
    )
}

export default Detail;