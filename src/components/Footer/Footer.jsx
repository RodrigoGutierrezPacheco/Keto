import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } 
from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



const FooterPage = () => {
  return (
		<div>
						<img className="ketoImg" src="images/ketoChallenge1.png" alt="" />

    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Keto Challenge</h5>
            <p>
							Somos un grupo de Profesionales que nos gusta ayudar a las personas a cumplir sus objetivos
            </p>
          </MDBCol>
          <MDBCol md="6">
            {/* <h5 className="title">Links</h5>
            {/* <ul>
						<li className="list-unstyled">
						<a href="#!">Instagram</a>
						</li>
						<li className="list-unstyled">
						<a href="#!">Link 2</a>
						</li>
						<li className="list-unstyled">
						<a href="#!">Link 3</a>
						</li>
						<li className="list-unstyled">
						<a href="#!">Link 4</a>
						</li>
					</ul> */} 
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/"> KetoChallenge </a>
        </MDBContainer>
      </div>
    </MDBFooter>
					</div>
  );
}

export default FooterPage;