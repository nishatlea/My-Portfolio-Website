import React from "react";
import { Container, Row } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <colgroup xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm webcoded`} <span className="wrap">web developer</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been{" "}
            </p>
            <button onClick={() => console.log("connect")}>
              Let's Connect
            </button>
          </colgroup>
        </Row>
      </Container>
    </section>
  );
};
