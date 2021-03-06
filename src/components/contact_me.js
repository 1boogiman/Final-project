// import React from "react";

// const Home = () => {
//   return <h1>contactdknfe</h1>;
// };

// export default Home;
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Contact Links</h5>
            <p>
            </p>
          </MDBCol>
          <MDBCol md="6">
            
            <ul>
              <li className="list-unstyled">
                <a href="https://github.com/1boogiman/">github</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.linkedin.com/in/rohit-bhardwaj-ba0a9b15a/">linkedin</a>
              </li>
              {/* <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li> */}
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;