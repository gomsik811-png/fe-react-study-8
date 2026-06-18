import { Button, Spinner, Container, Nav, Navbar, Row, Col, Card } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate } from 'react-router';



function Home() {
    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home"> <Link to="/">Main</Link></Nav.Link>
                        <Nav.Link href="#info"><Link to="/info">info</Link></Nav.Link>
                        <Nav.Link href="#mypage">   <Link to="/mypage">MyPage</Link></Nav.Link>
                        <Nav.Link href="cart">   <Link to="/cart">cart</Link></Nav.Link>

                    </Nav>
                </Container>
            </Navbar>


            <Routes>
                <Route path="/" element={<div><h3>Main</h3></div>} />
                <Route path="/info" element={<div><h1>info page</h1></div>} />
                <Route path="/mypage" element={<div><h1>MyPage</h1></div>} />
                <Route path="/cart" element={<div><h1>Cart</h1></div>} />
                <Route path="/*" element={<div><h1>잘못된 접근입니다.</h1></div>} />
            </Routes>

        </div>




    )
}

export default Home;