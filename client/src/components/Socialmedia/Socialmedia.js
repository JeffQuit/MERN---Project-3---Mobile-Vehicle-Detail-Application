import React from "react";
import {
  MDBMask,
  MDBView,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
} from "mdbreact";
import "./Socialmedia.css";

export default function Socialmedia() {
  return (
    <div className="Socialmedia-Full-Container">
      <MDBContainer className="mt-5">
        <MDBCardTitle className="h2">Instagram</MDBCardTitle>
        <MDBRow>
          {/* <MDBCol md="4">
            <MDBView hover>
              <img src="/Assets/Images/img3.jpg" className="img-fluid" alt="" />
              <a
                href="https://www.instagram.com/p/BZOwFWXHF5m/"
                target="_blank"
              >
                <MDBMask className="flex-center" overlay="red-slight">
                  <p className="white-text">Detailing done for @ends_uno</p>
                </MDBMask>
              </a>
            </MDBView>
          </MDBCol> */}
          <MDBCol>
            <MDBCard className="mx-auto" style={{ width: "20rem" }}>
              <a
                href="https://www.instagram.com/p/BZOwFWXHF5m/"
                target="_blank"
              >
                <MDBCardImage
                  className="img-fluid"
                  src="/Assets/Images/img3.jpg"
                  waves
                />
              </a>
              <MDBCardBody>
                {/* <MDBCardTitle>Title</MDBCardTitle> */}
                <MDBCardText>Detailing done for @ends_uno</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          {/* <MDBCol md="4">
            <MDBView hover>
              <img src="/Assets/Images/img2.jpg" className="img-fluid" alt="" />
              <a
                href="https://www.instagram.com/p/BY6aa9CHW5F/"
                target="_blank"
              >
                <MDBMask className="flex-center" overlay="red-slight">
                  <p className="white-text">Detailing done for @ends_uno</p>
                </MDBMask>
              </a>
            </MDBView>
          </MDBCol> */}
          <MDBCol>
            <MDBCard className="mx-auto" style={{ width: "20rem" }}>
              <a
                href="https://www.instagram.com/p/BY6aa9CHW5F/"
                target="_blank"
              >
                <MDBCardImage
                  className="img-fluid"
                  src="/Assets/Images/img2.jpg"
                  waves
                />
              </a>
              <MDBCardBody>
                {/* <MDBCardTitle>Title</MDBCardTitle> */}
                <MDBCardText>Detailing done for @ends_uno</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          {/* <MDBCol md="4">
            <MDBView hover>
              <img src="/Assets/Images/img1.jpg" className="img-fluid" alt="" />
              <a
                href="https://www.instagram.com/p/B0KSDpgH0Ph/"
                target="_blank"
              >
                <MDBMask className="flex-center" overlay="red-slight">
                  <p className="white-text">Detailing done for @1nice_subie</p>
                </MDBMask>
              </a>
            </MDBView>
          </MDBCol> */}

          <MDBCol>
            <MDBCard className="mx-auto" style={{ width: "20rem" }}>
              <a
                href="https://www.instagram.com/p/B0KSDpgH0Ph/"
                target="_blank"
              >
                <MDBCardImage
                  className="img-fluid"
                  src="/Assets/Images/img1.jpg"
                  waves
                />
              </a>
              <MDBCardBody>
                {/* <MDBCardTitle>Title</MDBCardTitle> */}
                <MDBCardText>Detailing done for @1nice_subie</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
