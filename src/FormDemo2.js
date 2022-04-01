import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
    state = { email: "", password: "", city: "", description: "" };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit")
    alertify.success(this.state.email + " added to db! ");
  };


  render() {
    return (
      <div>
        <FormGroup>
          <Form onSubmit={this.handleSubmit}>
            <Label for="email">Email </Label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </Form>
        </FormGroup>

        <FormGroup>
          <Form onSubmit={this.handleSubmit}>
            <Label for="password">Password </Label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            />
          </Form>
        </FormGroup>

        <FormGroup>
          <Form onSubmit={this.handleSubmit}>
            <Label for="description">Description </Label>
            <input
              type="textArea"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={this.handleChange}
            />
          </Form>
        </FormGroup>

        <FormGroup>
          <Label for="city"></Label>
          <Input
            type="select"
            name="city"
            id="city"
            onChange={this.handleChange}
          >
            <option>Ulm</option>
            <option>Heidenheim</option>
            <option>Aalen</option>
            <option>Elchingen</option>
            <option>Elwangen</option>
          </Input>
        </FormGroup>

        <Button type="submit" onClick={this.handleSubmit}>Save</Button>
      </div>
    );
  }
}
