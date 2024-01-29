import { Button, Card, Col, Container, Row } from "react-bootstrap";
import React, { useRef, useState } from "react";
import York from "../assets/logo_york.png";
import Logo from "../assets/york.png";
import valid from "../assets/valid.jpg";
import expired from "../assets/expired.png";
import { CardInfo, certificateInfo } from "../constants/certificateInfo";
import moment from "moment";
import SaveImage from "../Utils/SaveImage";
import "./Certificate.css";

const Certificate = () => {
  const [expiredDate, setExpiredDate] = useState("2024-08-10");
  const [currentDate, setCurrentDate] = useState(moment().format("YYYY-MM-DD"));
  const printRef = useRef(null);

  return (
    <Container fluid>
      <Row className="p-z">
        <Col sm={12} xs={12} md={12} lg={9} xl={9}>
          <div className="certificate-wrapper shadow" ref={printRef}>
            <div className="certification-namespace">
              <header className="head shadow">
                <div className="head-wrapper">
                  <div className="head-container">
                    <h1 className="text">{certificateInfo.company}</h1>
                  </div>
                </div>
              </header>
              <main className="information">
                <div className="information-container">
                  <h3 className="d-lg-block d-md-block  d-none subhead">
                    {certificateInfo.text}
                  </h3>
                  <h1 className="info-head">{certificateInfo.name}</h1>
                  <h3 className="info-subhead">{certificateInfo.subText}</h3>
                  <h1 className="info-head">{certificateInfo.courseName}</h1>
                  <h4 className="info-subhead">{certificateInfo.Date}</h4>
                  <h5>{certificateInfo.timeSpent} </h5>
                </div>
              </main>
              <footer className="d-block">
                <div className="footer-wrapper">
                  <div>
                    {/* signature img */}
                    {/* <img
                      className="signature-img rounded-lg"
                      src=""
                      alt="name"
                    /> */}
                    <p className="info">
                      <strong>{certificateInfo.director}</strong>
                    </p>
                    <p className="desc">{certificateInfo.description}</p>
                  </div>
                </div>
                <span className="img-wrapper d-xl-block   d-none">
                  <img src={Logo} className="img-comp " />
                </span>
                <span className="qr-wrap  d-xl-block  d-none">
                  <svg
                    height="128"
                    width="128"
                    viewBox="0 0 37 37"
                    className="qr-code"
                  >
                    <path
                      fill="#FFFFFF"
                      d="M0,0 h37v37H0z"
                      shape-rendering="crispEdges"
                    ></path>
                    <path
                      fill="#000000"
                      d="M0 0h7v1H0zM8 0h1v1H8zM10 0h1v1H10zM18 0h1v1H18zM21 0h1v1H21zM23 0h1v1H23zM25 0h4v1H25zM30,0 h7v1H30zM0 1h1v1H0zM6 1h1v1H6zM9 1h1v1H9zM12 1h5v1H12zM18 1h2v1H18zM21 1h2v1H21zM24 1h2v1H24zM28 1h1v1H28zM30 1h1v1H30zM36,1 h1v1H36zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h2v1H9zM12 2h1v1H12zM14 2h1v1H14zM16 2h3v1H16zM21 2h1v1H21zM23 2h2v1H23zM26 2h2v1H26zM30 2h1v1H30zM32 2h3v1H32zM36,2 h1v1H36zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1H10zM13 3h1v1H13zM18 3h2v1H18zM25 3h2v1H25zM28 3h1v1H28zM30 3h1v1H30zM32 3h3v1H32zM36,3 h1v1H36zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h6v1H8zM16 4h1v1H16zM21 4h1v1H21zM23 4h6v1H23zM30 4h1v1H30zM32 4h3v1H32zM36,4 h1v1H36zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM11 5h2v1H11zM15 5h1v1H15zM17 5h3v1H17zM21 5h2v1H21zM25 5h1v1H25zM30 5h1v1H30zM36,5 h1v1H36zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22 6h1v1H22zM24 6h1v1H24zM26 6h1v1H26zM28 6h1v1H28zM30,6 h7v1H30zM8 7h1v1H8zM10 7h2v1H10zM14 7h4v1H14zM19 7h1v1H19zM21 7h1v1H21zM24 7h1v1H24zM26 7h2v1H26zM0 8h1v1H0zM4 8h1v1H4zM6 8h4v1H6zM11 8h1v1H11zM13 8h3v1H13zM17 8h1v1H17zM19 8h4v1H19zM24 8h1v1H24zM29 8h5v1H29zM36,8 h1v1H36zM2 9h1v1H2zM9 9h2v1H9zM13 9h2v1H13zM16 9h1v1H16zM22 9h2v1H22zM25 9h3v1H25zM31 9h5v1H31zM3 10h2v1H3zM6 10h1v1H6zM8 10h1v1H8zM10 10h3v1H10zM14 10h1v1H14zM16 10h3v1H16zM22 10h4v1H22zM27 10h2v1H27zM31 10h1v1H31zM33 10h2v1H33zM1 11h1v1H1zM3 11h2v1H3zM9 11h1v1H9zM11 11h2v1H11zM14 11h1v1H14zM17 11h1v1H17zM20 11h2v1H20zM23 11h2v1H23zM26 11h2v1H26zM29 11h2v1H29zM32 11h1v1H32zM34 11h2v1H34zM0 12h5v1H0zM6 12h2v1H6zM9 12h3v1H9zM15 12h1v1H15zM17 12h1v1H17zM20 12h3v1H20zM24 12h1v1H24zM29 12h3v1H29zM33,12 h4v1H33zM1 13h1v1H1zM5 13h1v1H5zM12 13h2v1H12zM15 13h2v1H15zM18 13h1v1H18zM23 13h1v1H23zM26 13h4v1H26zM32 13h2v1H32zM4 14h1v1H4zM6 14h1v1H6zM10 14h2v1H10zM14 14h3v1H14zM20 14h4v1H20zM25 14h3v1H25zM30 14h5v1H30zM1 15h1v1H1zM4 15h1v1H4zM8 15h5v1H8zM15 15h1v1H15zM17 15h1v1H17zM21 15h2v1H21zM30 15h3v1H30zM34 15h1v1H34zM0 16h4v1H0zM6 16h3v1H6zM10 16h1v1H10zM12 16h2v1H12zM17 16h1v1H17zM20 16h3v1H20zM24 16h1v1H24zM27 16h4v1H27zM33 16h2v1H33zM36,16 h1v1H36zM1 17h1v1H1zM3 17h2v1H3zM8 17h2v1H8zM12 17h3v1H12zM17 17h2v1H17zM23 17h1v1H23zM25 17h4v1H25zM32 17h1v1H32zM35 17h1v1H35zM0 18h1v1H0zM3 18h2v1H3zM6 18h1v1H6zM9 18h1v1H9zM12 18h4v1H12zM17 18h1v1H17zM20 18h2v1H20zM23 18h1v1H23zM27 18h3v1H27zM31 18h1v1H31zM33 18h1v1H33zM2 19h1v1H2zM5 19h1v1H5zM7 19h1v1H7zM12 19h1v1H12zM16 19h3v1H16zM20 19h2v1H20zM24 19h1v1H24zM26 19h1v1H26zM29 19h3v1H29zM34 19h2v1H34zM0 20h5v1H0zM6 20h2v1H6zM13 20h1v1H13zM17 20h1v1H17zM20 20h3v1H20zM27 20h1v1H27zM29 20h3v1H29zM34 20h1v1H34zM0 21h1v1H0zM2 21h4v1H2zM8 21h4v1H8zM14 21h3v1H14zM18 21h1v1H18zM21 21h3v1H21zM25 21h4v1H25zM31 21h2v1H31zM36,21 h1v1H36zM0 22h5v1H0zM6 22h1v1H6zM9 22h7v1H9zM17 22h1v1H17zM21 22h1v1H21zM23 22h2v1H23zM26 22h2v1H26zM31 22h4v1H31zM1 23h1v1H1zM4 23h2v1H4zM7 23h2v1H7zM10 23h2v1H10zM13 23h1v1H13zM15 23h7v1H15zM24 23h1v1H24zM28 23h5v1H28zM34 23h2v1H34zM0 24h4v1H0zM6 24h3v1H6zM12 24h2v1H12zM16 24h2v1H16zM19 24h5v1H19zM26 24h1v1H26zM29 24h3v1H29zM33 24h3v1H33zM0 25h6v1H0zM8 25h1v1H8zM11 25h3v1H11zM15 25h3v1H15zM20 25h1v1H20zM23 25h1v1H23zM26 25h4v1H26zM32 25h1v1H32zM4 26h1v1H4zM6 26h2v1H6zM9 26h4v1H9zM14 26h2v1H14zM18 26h1v1H18zM22 26h3v1H22zM26 26h2v1H26zM31 26h1v1H31zM34 26h1v1H34zM3 27h3v1H3zM9 27h1v1H9zM14 27h2v1H14zM17 27h2v1H17zM20 27h5v1H20zM26 27h1v1H26zM34 27h1v1H34zM36,27 h1v1H36zM0 28h2v1H0zM5 28h2v1H5zM9 28h2v1H9zM13 28h1v1H13zM17 28h1v1H17zM19 28h4v1H19zM24 28h1v1H24zM27 28h6v1H27zM34 28h1v1H34zM36,28 h1v1H36zM8 29h1v1H8zM10 29h2v1H10zM14 29h1v1H14zM16 29h1v1H16zM18 29h1v1H18zM22 29h2v1H22zM28 29h1v1H28zM32 29h1v1H32zM0 30h7v1H0zM8 30h1v1H8zM10 30h4v1H10zM15 30h1v1H15zM20 30h2v1H20zM23 30h1v1H23zM26 30h1v1H26zM28 30h1v1H28zM30 30h1v1H30zM32 30h1v1H32zM0 31h1v1H0zM6 31h1v1H6zM9 31h1v1H9zM13 31h1v1H13zM17 31h1v1H17zM21 31h1v1H21zM24 31h1v1H24zM26 31h1v1H26zM28 31h1v1H28zM32 31h3v1H32zM0 32h1v1H0zM2 32h3v1H2zM6 32h1v1H6zM8 32h2v1H8zM11 32h5v1H11zM17 32h1v1H17zM21 32h4v1H21zM28,32 h9v1H28zM0 33h1v1H0zM2 33h3v1H2zM6 33h1v1H6zM11 33h2v1H11zM15 33h4v1H15zM23 33h1v1H23zM25 33h3v1H25zM29 33h3v1H29zM33 33h1v1H33zM35,33 h2v1H35zM0 34h1v1H0zM2 34h3v1H2zM6 34h1v1H6zM9 34h1v1H9zM11 34h2v1H11zM14 34h2v1H14zM18 34h1v1H18zM21 34h1v1H21zM23 34h1v1H23zM28 34h3v1H28zM33 34h2v1H33zM0 35h1v1H0zM6 35h1v1H6zM9 35h2v1H9zM12 35h2v1H12zM15 35h3v1H15zM19 35h6v1H19zM27 35h1v1H27zM29 35h1v1H29zM32 35h1v1H32zM34 35h2v1H34zM0 36h7v1H0zM8 36h1v1H8zM11 36h1v1H11zM13 36h3v1H13zM17 36h2v1H17zM20 36h3v1H20zM24 36h1v1H24zM26 36h2v1H26zM31 36h1v1H31zM34,36 h3v1H34z"
                      shape-rendering="crispEdges"
                    ></path>
                  </svg>
                </span>
                <div>
                  <p className="verify">
                    {certificateInfo.verifyMsg}
                    <br />
                    {certificateInfo.Link}
                  </p>
                </div>
              </footer>
            </div>
          </div>
          <Button
            onClick={() => SaveImage(printRef)}
            variant="dark"
            className="m-4"
          >
            Downl;oad certificate
          </Button>
        </Col>
        <Col sm={12} xs={12} md={12} lg={3} xl={3}>
          <div>
            <Card className="shadow rounded  mt-2  w-lg-18 w-xl-18  ">
              <div className="text-center">
                <img
                  src={York}
                  width={90}
                  className="c-img p-1 m-1 border shadow"
                  alt="Logo"
                />
              </div>

              <div className="p-4 card-info ">
                <p className="txt">FullName :</p>
                <p className="subtxt">{CardInfo.FullName}</p>
                <p className="txt">Valid From :</p>
                <p className="subtxt">{CardInfo.ValidFrom}</p>
                <p className="txt">Valid To :</p>
                <p className="subtxt">{CardInfo.ValidTo}</p>
              </div>
              {expiredDate < currentDate ? (
                <img src={expired} className="  expired-img " />
              ) : (
                <img src={valid} className="valid-img  " />
              )}
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Certificate;
