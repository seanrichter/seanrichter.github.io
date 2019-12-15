import React, { Component, useState  } from "react";
import API from "../utils/API";
import {Jumbotron, Col, Row, Container} from "react-bootstrap";


class Detail extends Component {
  state = {
    movie: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {

    console.log(this.props.match.params.id);
    API.getMovie(this.props.match.params.id)
      .then(res => {
          this.setState({ movie: res.data });
          console.log(this.state.movie);
          API.getRandomCocktail()
           .then ( res => 
            {this.setState({cocktail: res.data});
            console.log(this.state.cocktail)})
           .catch(err => console.log("cocktail err", err))
        })  
      .catch(err => console.log(err));
  }

  render() {
    const directorFont = {
        fontWeight:"bold",
        fontStyle:"italic"
    };



    return (
      <Container fluid>  
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h4>
                {this.state.movie.title} - {this.state.movie.year}
              </h4>
    
            </Jumbotron>
          </Col>
        </Row>
        <Row>
            <Col size="md-4">
            <img src={this.state.movie.imageUrl} alt={this.state.movie.title} width={300}></img>
            </Col>
            <Col size="md-8">
                <h5>Synopsis</h5>
                {this.state.movie.synopsis}
                <br/>
                <p style={directorFont}>directed by {this.state.movie.director}</p>
            </Col>
        </Row>
        
        {this.state.cocktail ?
        (<div>
            <br/>
            <h4>Make one of these before you watch!</h4>
            <h3>{this.state.cocktail.name}</h3>
            Glass:  {this.state.cocktail.glass}<br/>
            Ingredients:<br/>
            <ul>
                {this.state.cocktail.ingredients.map(ing => (
                <li >
                    {ing.ingredient} - {(ing.measure?ing.measure:"")}
                 </li>
                ))}
            </ul>
            <span>{this.state.cocktail.instructions}</span>
        </div>)
        :
        (<div>...loading </div>)
        }
      </Container>
    );
  }
}

export default Detail;
