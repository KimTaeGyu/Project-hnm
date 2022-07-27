import React from 'react'
import { Form, Button, Container} from "react-bootstrap"
import { useNavigate } from 'react-router-dom'


//Form에서 주는 이벤트 를 페러미터값으로 받아온다
// event.preventDefault() 이 함수를 쓰면 계속 refresh하는것을 막아준다
const Login = ({setAuthenticate}) => {
  const navigate = useNavigate()
  const loginUser=(event)=>{
    event.preventDefault();
    console.log("login")
    setAuthenticate(true)
    navigate("/");
     
  }
  return (
    <Container>
    <Form onSubmit={(event)=>loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="danger" type="submit">
        로그인
      </Button>

    </Form>
    </Container>
  );
}


export default Login