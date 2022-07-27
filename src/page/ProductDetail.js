import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

const ProductDetail = () => {
  let{id} = useParams();
  const [product,setProduct] = useState(null)
  const getProductDetail=async()=>{
    let url = `https://my-json-server.typicode.com/KimTaeGyu/Project-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }
  useEffect(()=>{
    getProductDetail();
  },[])
  return <Container>
    <Row>
      <Col className='product-img'>
        <img src={product?.img}/>
    </Col>
    <Col>
      <div><h2>{product?.title}</h2></div>
      <div><h2>{product?.price}</h2></div>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          사이즈 선택
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">S</Dropdown.Item>
          <Dropdown.Item href="#/action-2">M</Dropdown.Item>
          <Dropdown.Item href="#/action-3">L</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
    </Row>
  </Container>
}

export default ProductDetail