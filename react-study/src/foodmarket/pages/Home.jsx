import FoodCard from '../components/FoodCard';

import { Button, Spinner, Container, Nav, Navbar, Row, Col, Card } from 'react-bootstrap';



function Home( {foods} ) {

    return (


        <div>


            {/* <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">FoodMarket</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}


            <div className='main-bg'></div>
            <Container>
                <Row>
                    {
                        foods.map((food, index) => {
                            return (
                                <Col md={4} sm={2} key={index}>
                                    {/*<foodcard  id={food.id} title={food.title} /> */}
                                    <FoodCard food={food} foods={foods} index={index} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>

        </div>

    )

}

export default Home;