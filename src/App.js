import React from "react";
import { Header } from "./Header";
import { Container, Row, Col, Card } from "react-bootstrap";
import stock_client from "./assets/stockimage_client.jpg";
import stock_startup from "./assets/stockimage_startup.png";
import rachel from "./assets/rachel.png";
import david from "./assets/david.png";
import alex from "./assets/alex.png";
import defaultpic from "./assets/default.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="header">
        KodeOp produces quality software for your company.
      </h1>
      <Container>
        <div id="about">
          <Row className="rowstyle">
            <Col lg={12} xl={6}>
              <img src={stock_client} alt="" className="stockimage" />
            </Col>
            <Col lg={12} xl={6}>
              <br />
              <h3 className="sectionheader">About Us</h3>
              <p className="sectiontext">
                We are a worker co-op based in Pomona, CA. We are talented
                individual programmers who met each other while studying at Cal
                Poly Pomona. Rodríguez's class was very difficult, so we had to
                develop a strong bond in order to survive. Although the struggle
                was intense and harsh, our skills as programmers have flourished
                and is at its peak performance as a result. We plan to use our
                talents and skills to make an impression on the coding world.
              </p>
            </Col>
          </Row>
        </div>
        <div id="mission">
          <Row className="rowstyle">
            <Col lg={12} xl={{ span: 6, order: 2 }}>
              <img src={stock_startup} alt="" className="stockimage" />
            </Col>
            <Col lg={12} xl={{ span: 6, order: 1 }}>
              <br />
              <h3 className="sectionheader">Our Mission</h3>
              <p className="sectiontext">
                Kode-Op is a spirited, imaginative software development company
                devoted to creating high-quality and well-functioning products
                envisioned by our clients. Our mission is to help clients create
                innovative solutions and ideas that fit their needs. We also
                believe that partnerships with our clients are extremely
                important and that they should be involved heavily in the
                software building process. We aim to become a regionally
                recognized brand, capitalizing on the inventive designs from our
                clients. Our goal is soaring growth, growing fulfillment, and
                top-notch professionalism.
              </p>
            </Col>
          </Row>
        </div>
      </Container>

      <div id="staff">
        <h3 className="sectionheader">Our Staff</h3>

        <div className="staffholder">
          <Card className="card" bg="dark" text="white">
            <Card.Img variant="top" src={david} />
            <Card.Body>
              <Card.Title>David Allison</Card.Title>
              <Card.Text>CEO/Backend Dev</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card" bg="dark" text="white">
            <Card.Img src={rachel} />
            <Card.Body>
              <Card.Title>Rachel Scherer</Card.Title>
              <Card.Text>Frontend Dev</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card" bg="dark" text="white">
            <Card.Img variant="top" src={defaultpic} />
            <Card.Body>
              <Card.Title>Osiris</Card.Title>
              <Card.Text>Database Manager</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card" bg="dark" text="white">
            <Card.Img variant="top" src={alex} />
            <Card.Body>
              <Card.Title>Alex</Card.Title>
              <Card.Text>Backend Dev</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card" bg="dark" text="white">
            <Card.Img variant="top" src={defaultpic} />
            <Card.Body>
              <Card.Title>June</Card.Title>
              <Card.Text>Frontend Dev</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div id="deliverables">
        <h3 className="sectionheaderdeliverables">Deliverables</h3>
      </div>
      <a
        href="https://drive.google.com/drive/folders/1hD_fnwefZ78lVn4yCefQ3Ma5MbtDpZvU"
        target="_blank"
        rel="noopener noreferrer"
      >
        Meeting Minutes
      </a>
      <a
        href="https://drive.google.com/drive/folders/1LJaYhLWA68wfSUG7QBM-ttU77QmJcuCp"
        target="_blank"
        rel="noopener noreferrer"
      >
        ER and UML Diagrams
      </a>
      <a
        href="https://docs.google.com/document/d/13ZrrLDfKXMW_41-p-CwRBq6yADBNgDQDdexdNV5XW2M/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Software Requirements Specification
      </a>
      <a
        href="https://protected-woodland-90535.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        MealTime website
      </a>
      <div className="spacer" />
    </div>
  );
}

export default App;
