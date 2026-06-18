import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams,useNavigate } from "react-router";
import { useState, useEffect } from "react";

function Detail( {foods} ){
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

    useEffect(()=>{
        console.log('useEffect 함수 실행 (의존성 배열 없음)')
    })  //의존성배열X -> 로딩될때마다 매번 실행

    useEffect(()=>{
        console.log('useEffect 함수 실행 [] 빈배열 의존')
    }, [])// 빈배열 -> 생성/로딩시 1회 실행

    useEffect(()=>{
        console.log('useEffect 함수 실행 [orderCount] 의존성 배열')
        console.log('useEffect[orderCOunt] : ' + orderCount)
    }, [orderCount])// 의존성 배열에 존재하느 값 -> 참고

    useEffect(()=>{
        console.log('useEffect 함수 실행 [test] 의존성 배열')
    }, [test])// 의존성 배열에 존재하느 값 -> 참고

    useEffect(()=>{
    console.log('useEffect 함수 실행 [test,orderCount] 의존성 배열')
    }, [test,orderCount])// 의존성 배열에 존재하느 값 -> 참고







    //-----------------------------------------





    //경로에 있는 값을 읽어오기
    let { id } = useParams();
    console.log(id);

    //detail/:id    

    //id확인 ->foods 배열 데이터 id 값 같은 food 데이터 찾기 -> food 화면에 푯; (imPath, title, content, price)

    //filter
    let food = foods.find((item)=>{
                    return item.id == id;
                })

    let foodIndex = foods.findIndex((item)=>{
                    return item.id == id;
                })
    // foods[foodIndex].title
    // foods[foodIndex].content

    let navigate = useNavigate();

    //해당하는 id의 상품이 없으면? 필터링

    if(food == undefined || food == null ){
        return(
            <div>
                <h1>없어 그거</h1>
                <h2>있는거 검색해</h2>
                <Button variant="info" onClick={()=>{
                    navigate("/");
                }}>홈으로 돌아가기</Button>
            </div>
        )
    }


    return(

        <Container>
            <Row>
                <Col md={6}>
                    <img src={ import.meta.env.BASE_URL + food.imgPath} style={{width:'100%'}} />
                </Col>
                <Col md={6}>
                    <h4>{food.title}</h4>
                    <p>{food.content}</p>
                    <p>{food.price}</p>

                    <p>
                        <Button variant="dard" onClick={()=>{setOderCount(orderCount-1)}}>-</Button>
                        <span> {orderCount} </span>
                        <Button variant="dard" onClick={()=>{
                            setOderCount(orderCount+1)
                            console.log('onClick() : ' + orderCount);
                            }}>+</Button>
                    </p>

                        <Button variant="primary">주문하기</Button>
                </Col>

            </Row>
        </Container>
    )
}

export default Detail;