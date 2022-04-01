import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import alertify from "alertifyjs";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";

export default class App extends Component {
  state = { currenCategory: "", products: [], cart: [] };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart");
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " remove from cart");

  };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currenCategory: category.categoryName });
    console.log(category);
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };
    return (
      <div>
        <Container>
          <Navi
            removeFromCart={this.removeFromCart}
            cart={this.state.cart}
          ></Navi>

          <Row>
            <Col xs="3">
              <CategoryList
                currenCategory={this.state.currenCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route exact
                  path="/"
                  element={
                    <ProductList
                    products={this.state.products}
                    addToCart={this.addToCart}
                    currenCategory={this.state.currenCategory}
                    changeCategory={this.changeCategory}
                    info={productInfo}    />
                  }
                />
          
                <Route path="/cart" element={<CartList 
                cart={this.state.cart}
                removeFromCart={this.removeFromCart}
                />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/form" element={<FormDemo1 />} />

              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
