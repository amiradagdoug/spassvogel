import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function LoginPage() {

    return (
        <Container>
            <Row className="px-4 my-5">
                <Col><h1>Login</h1></Col>
            </Row>
            <Row className="px-4 my-5">
                <Col sm={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Email Adresse</Form.Label>
                            <Form.Control type="text" placeholder="Email eingeben"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" minLength="8" placeholder="Enter Password"
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">Login &gt;&gt;</Button>
                        &nbsp;

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage;