import React, { Component } from "react";
import {
  Navbar,
  Container,
  Nav
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Information from "../Pages/Information";
import Settings from "../Pages/Settings";
import Structure from "../Pages/Structure";
//import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Add from "../Pages/AddForm/Add";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faSearch,
  faHome,
  faFolder,
  faPlusCircle,
  faLink
} from "@fortawesome/fontawesome-free-solid";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="light">
          <Container>
            <button className="btn btn-light">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <Navbar.Brand href="/" className="justify-content-end">
              Учебные центры V
            </Navbar.Brand>
            <button className="btn btn-light">
              <FontAwesomeIcon icon={faComments} />
            </button>
          </Container>
        </Navbar>
        <Navbar
          collapseOnSelect
          expand="md"
          bg="light"
          fixed="bottom"
        >
          <Container>
            <Router>
              <Link to="/home">
                <button className="btn btn-light">
                  <FontAwesomeIcon icon={faHome} />
                </button>
              </Link>

              <Link to="/folder">
                <button className="btn btn-light">
                  <FontAwesomeIcon icon={faFolder} />
                </button>
              </Link>

              <Link to="/add">
                <button className="btn btn-light">
                  <FontAwesomeIcon icon={faPlusCircle} />
                </button>
              </Link>

              <Link to="/link">
                <button className="btn btn-light">
                  <FontAwesomeIcon icon={faLink} />
                </button>
              </Link>
            </Router>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/structure"> Структура </Nav.Link>
                <Nav.Link href="/information"> Информация </Nav.Link>
                <Nav.Link href="/settings"> Настройки </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Switch>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/structure" component={Structure}></Route>
            <Route exact path="/information" component={Information}></Route>
            <Route exact path="/settings" component={Settings}></Route>
            <Route exact path="/add" component={Add}></Route>
          </Switch>
        </Router>
      </>
    );
  }
}
