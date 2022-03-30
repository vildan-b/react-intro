import React, { Component} from 'react'

import { Col, Container, Row} from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";


export default class App extends Component {
  state={currenCategory:""}
  changeCategory=(category)=>{
    this.setState({currenCategory:category.categoryName});
  }

  render() {
    let productInfo= {title:"Product List"};
    let categoryInfo={title:"Category List"}
        return (
    <div>
      <Container>
        <Row>
          <Navi></Navi>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList currenCategory={this.state.currenCategory} changeCategory={this.changeCategory} info={categoryInfo}/>
          </Col>
          <Col xs="9">

          <ProductList currenCategory={this.state.currenCategory} changeCategory={this.changeCategory} info={productInfo} />
          </Col>
        </Row>
      </Container>

     
    </div>
  );
  }
}

