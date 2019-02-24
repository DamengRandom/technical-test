import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const HeaderStyledWrapper = styled.section`
  background-color: #06314a;
  .container-fluid {
    width: 80%;
    img {
      width: 125px;
      height: 27px;
      overflow: hidden;
    }
  }
  @media only screen and (max-width: 600px) {
    .container-fluid {
      width: 100%;
    }
  }
`;

export const Header = () => (
  <HeaderStyledWrapper>
    <Container fluid="true">
      <Row>
        <Col>
          <Navbar variant="dark">
            <Navbar.Brand href="/">
              <img
                alt="Deputy"
                src="https://d21pqaamub0upm.cloudfront.net/dptycms/wp-content/themes/deputy/assets/imagesnew/logo/logo.png"
              />
            </Navbar.Brand>
          </Navbar>
        </Col>
      </Row>
    </Container>
  </HeaderStyledWrapper>
);
