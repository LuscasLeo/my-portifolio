import 'bootstrap/scss/bootstrap.scss';
import React from 'react';
import { Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { hot } from 'react-hot-loader/root';
import './styles/dracula.css';
import './styles/style.scss';
import { FaGithub } from 'react-icons/fa/index';

const App: React.FC<{}> = () => {
  return (
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <FaGithub /> LuscasLeo.dev
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Row>
        <Col xs={8}>Col1</Col>
        <Col xs={4}>Col2</Col>
      </Row>
    </Container>
  );
};
export default hot(App);
