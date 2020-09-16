import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./Socialmedia.css";

export default function Socialmedia() {
  return (
    // <div className="Socialmedia-Full-Container">

    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="4">
          <MDBView hover>
            <img
              src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
              className="img-fluid"
              alt=""
            />
            {/* 
				To use when mapping images
				`url(${img.url})` 

				Template literal to grab the Image's URL, as well as the IG Page URL.
			*/}
            <a href="https://www.google.com" target="_blank">
              <MDBMask className="flex-center" overlay="red-slight">
                <p className="white-text">Example Text of image description</p>
              </MDBMask>
            </a>
          </MDBView>
        </MDBCol>

        <MDBCol md="4">
          <MDBView hover>
            <img
              src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
              className="img-fluid"
              alt=""
            />

            <MDBMask className="flex-center" overlay="red-slight">
              <p className="white-text">More Example Text</p>
            </MDBMask>
          </MDBView>
        </MDBCol>
        <MDBCol md="4">
          <MDBView hover>
            <img
              src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center" overlay="red-slight">
              <p className="white-text">
                Hey, look at that, more example text for instagram
              </p>
            </MDBMask>
          </MDBView>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mt-4">
        <MDBCol md="4">
          <MDBView hover zoom>
            <img
              src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center">
              <p className="white-text">Zoom effect</p>
            </MDBMask>
          </MDBView>
        </MDBCol>

        <MDBCol md="4">
          <MDBView hover>
            <img
              src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center" overlay="red-slight">
              <p className="white-text">Example Text of image description</p>
            </MDBMask>
          </MDBView>
        </MDBCol>
        <MDBCol md="4">
          <MDBView hover>
            <img
              src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center" overlay="red-slight">
              <p className="white-text">Example Text of image description</p>
            </MDBMask>
          </MDBView>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    // </div>
  );
}
