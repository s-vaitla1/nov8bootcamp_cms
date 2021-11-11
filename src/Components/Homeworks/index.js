import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar'
import { Table } from 'reactstrap';
// import { Link } from 'react-router-dom' ;

function Homeworks() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">WELCOME TO BOOTCAMP - NOVEMBER 10 EDITION</h1>
          <p className="lead">My Name is Shreeya Vaitla and I'm a student</p>
          <NavBar />

          <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Description</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Homework 2.2</td>
          <td>Build a Wynisco Bootcamp Class Website</td>
          <td><a href="https://s-vaitla1.github.io/wyniscoHTMLWebsite/index.html"> Link</a> </td>
       </tr>
        <tr>
          <th scope="row">2</th>
          <td>Homework 3.1</td>
          <td>CSS Selectors Exercise</td>
          <td><a href="https://codepen.io/svaitla/pen/WNEgbLz"> Link</a> </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Homework 3.2</td>
          <td>Navigation Bar</td>
          <td><a href="https://s-vaitla1.github.io/wyniscoHTMLWebsite/index.html"> Link</a> </td>
        </tr> 
        <tr>
          <th scope="row">4</th>
          <td>Homework 3.4</td>
          <td>HW Quiz</td>
          <td><a href="https://codepen.io/svaitla/pen/xxLaGdO"> Link</a> </td>
        </tr> 
      {/*  <tr>
          <th scope="row">5</th>
          <td>Homework 3.5</td>
          <td>Build these layout using CSS grid and Flexbox</td>
          <td><a href="https://codepen.io/svaitla/pen/xxLaGdO"> Link</a> </td>
      </tr> */}

      </tbody>
    </Table>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Homeworks;
