import React from "react";
import { Header } from  "./Header"
import { Container, Row, Col} from "react-bootstrap"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="header">KodeOp produces quality software for your company.</h1>
      
      <Container>
        <Row className="rowstyle">
          <Col>
          </Col>
          <Col>
          <h3 className="sectionheader">About Us</h3>
          <p className="sectiontext">We are a worker co-op based in Pomona, CA. We are talented individual programmers who met each other while they were studying at Cal Poly Pomona. Through the hardship of enduring Rodriguez's class, we developed a strong bond in order to survive. Although the struggle was intense and harsh, our skills as programmers have flourished and is at its peak performance. Coming together as a group of individuals, we plan to use our talents and skills to make a impression on the coding world.</p>
          </Col>
        </Row>
        <Row className="rowstyle">
          <Col>
          <h3 className="sectionheader">Our mission</h3>
          <p className="sectiontext">Billions upon billions of brilliant syntheses a still more glorious dawn awaits cosmic ocean network of wormholes citizens of distant epochs. Birth gathered by gravity brain is the seed of intelligence kindling the energy hidden in matter as a patch of light made in the interiors of collapsing stars. Globular star cluster inconspicuous motes of rock and gas invent the universe another world intelligent beings inconspicuous motes of rock and gas and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
