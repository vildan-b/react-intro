import React, { Component} from 'react'
import { ListGroup,ListGroupItem } from "reactstrap";


export default class CategoryList extends Component {
constructor(props){
  super(props);
  this.state= {categories:[{categoryId:1,categoryName:"Computer"},
                           {categoryId:2,categoryName:"Elektronik"}
]};

}

  render() {
    return (
      <div>
        <h5>{this.props.info.title}</h5>
        <h5>{this.state.counter}</h5>
        <ListGroup>
          {
            this.state.categories.map(category =>(
              <ListGroupItem color="danger" key={category.categoryId}>
                {category.categoryName}</ListGroupItem>

            ))
          }
  
</ListGroup>
      </div>
    )
  }
}
