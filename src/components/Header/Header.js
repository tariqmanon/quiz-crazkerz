import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (


        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to='/'>Quiz Mania</Link></Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to='/topics' activeClassName="active">Topics</Nav.Link>
                    <Nav.Link as={Link} to='/statistics' activeClassName="active">Statistics</Nav.Link>
                    <Nav.Link as={Link} to="/blog" activeClassName="active">Blog</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );
}

export default Header;