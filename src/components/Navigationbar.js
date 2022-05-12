import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
const Navigationbar = () => {
    return (
    <Navbar bg="dark" variant='dark' expand="lg">
    <Container>
        <Navbar.Brand href="/">React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="/">Customer</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/stores">Stores</Nav.Link>
            <Nav.Link href="/sales">Sales</Nav.Link>
            
            </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
        
    )
}
    
export default Navigationbar;