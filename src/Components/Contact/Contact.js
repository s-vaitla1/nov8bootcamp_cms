import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar';

function Contact() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
         <NavBar />
        <Container fluid>
          <h1 className="display-3">My Contact Details</h1>
          <p className="lead">Here are my contact details </p>
          <p className="lead">Email : shreeya.ed@gmail.com </p>
          <p className="lead">Phone : 402 805 0550 </p>
          <p className="lead">Typical Wake up / Sleep Hours : Other than bootcamp. I will available morning 11AM EST/ 9AM MST to 5PM EST/ 3PM MST via whatsapp or mobile  </p>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Contact;
