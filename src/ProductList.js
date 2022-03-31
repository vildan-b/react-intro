/* eslint-disable react/prop-types */
import React, { Component } from "react";
import {Table} from "reactstrap"


export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h5>{this.props.info.title} -- {this.props.currenCategory}</h5>
        <Table bordered>
          <thead>
            <tr>
              <th>id</th>
              <th>productName</th>
              <th>categoryId</th>
              <th>quantityPerUnit</th>
              <th>unitPrice</th>
              <th>unitsInStock</th>

     
            </tr>
          </thead>
          <tbody>
          {
            this.props.products.map(product =>(
              <tr key={product.productName}>
              <th scope="row">  {product.id}</th>
              <td>{product.productName}</td>
              <td>{product.categoryId}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>

                      </tr>

            ))
          }
           
           
          </tbody>
        </Table>
      </div>
    );
  }
}
