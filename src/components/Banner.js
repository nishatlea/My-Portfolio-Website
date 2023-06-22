import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "AI Researcher", "Blockchain Engineer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <colgroup xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate_animated animate_fadeIn" : ""}
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h2>
                    {`Hi! I'm Nishat. I am`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="2000"
                      data-rotate='[ "Web Developer", "AI Researcher", "Blockchain Engineer " ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been{" "}
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let's Connect{" "}
                    <ArrowRightCircle size={25}></ArrowRightCircle>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </colgroup>
          <colgroup xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </colgroup>
        </Row>
      </Container>
    </section>
  );
};
