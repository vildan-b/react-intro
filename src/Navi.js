import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,NavbarText
} from "reactstrap";
import CartSummary from "./CartSummary";
import {Link } from "react-router-dom"

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">Vildan App</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <Link to="/form">Form Demo</Link>
              </NavItem>
              <NavItem>
                <NavLink to="/tt">
                  GitHub
                </NavLink>
              </NavItem>
         <CartSummary 
         removeFromCart={this.props.removeFromCart}
         cart={this.props.cart}></CartSummary>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
