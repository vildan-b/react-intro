import React, { Component } from 'react'
import { Button } from 'reactstrap';


export default class ProductList extends Component {

  render() {
    return (
      <div>
        <h5>{this.props.info.title}</h5>
        <h5> {this.props.currenCategory}</h5>
        <Button color="danger">Danger!</Button>

      </div>
    )
  }
}
