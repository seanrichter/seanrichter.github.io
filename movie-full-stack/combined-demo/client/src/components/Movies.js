import React, {Component} from "react";
import API from "../utils/API";
import {Button,Jumbotron, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Input,TextArea} from "./forms/formfields";
import "./Movies.css";

class Movies extends Component{

    state = {

        movies:[],
        title:"",
        director: "",
        year: "",
        imageUrl: "",
        synopsis: ""

    };

    componentDidMount(){
        this.loadMovies();
    }

    loadMovies = () => {
        
        API.getMovies()
        .then(res => {
            this.setState({ movies: res.data, title: "", director: "", year: "", imageUrl:"" , synopsis: "" })
            console.log(this.state.movies);
            }
          )
        .catch(err => console.log(err));
    };
    

    deleteMovie = id => {
      console.log(id);
      API.deleteMovie(id)
       .then(res => this.loadMovies())
       .catch(err => console.log(err));
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
      console.log(this.state);
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.title && this.state.director && this.state.year) {
        API.saveMovie({
          title: this.state.title,
          director: this.state.director,
          year: this.state.year,
          imageUrl: this.state.imageUrl,
          synopsis: this.state.synopsis
        })
          .then(res => this.loadMovies())
          .catch(err => console.log(err));
      }
    };


    render(){
       
      const pStyle = {
        fontSize: '15px',
        textAlign: 'center'
      };

        return(
            <Container fluid>
            <Row>
              <Col size="md-6">
                <Jumbotron>
                  <h1>What Movies Do I Like To Watch?</h1>
                </Jumbotron>
                <form>
                  <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title (required)"
                    className="form-control"
                  />
                  <Input
                    value={this.state.director}
                    onChange={this.handleInputChange}
                    name="director"
                    placeholder="Director (required)"
                    className="form-control"
                  />
                  <Input
                    value={this.state.year}
                    onChange={this.handleInputChange}
                    name="year"
                    placeholder="Year (required)"
                    className="form-control"
                  />
                   <Input
                    value={this.state.imageUrl}
                    onChange={this.handleInputChange}
                    name="imageUrl"
                    placeholder="Image Url (optional)"
                    className="form-control"
                  />
                  <TextArea
                    value={this.state.synopsis}
                    onChange={this.handleInputChange}
                    name="synopsis"
                    placeholder="Synopsis (Optional)"
                    className="form-control"
                  />
                  <Button disabled={!(this.state.director && this.state.title && this.state.year)} onClick={this.handleFormSubmit} variant="success" className="btn-align-right">Submit Movie</Button>
                </form>
              </Col>  
              <Col size="md-6 sm-12">
                <Jumbotron>
                  <h1>These are already on my list</h1>
                </Jumbotron>
                {this.state.movies.length ? (
                  <ul>
                    {this.state.movies.map(movie => (
                      <li className="list-group-item" key={movie._id}>
                         <Link to={"/movie/" + movie._id}>
                         {movie.title}
                         </Link>
                         <Button variant="danger" size="sm" className="btn-align-right" onClick={() => this.deleteMovie(movie._id)}>x</Button>
                      </li>
                    ))}
                  </ul>
                 
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>
           
            </Row>
          </Container>
        )
    }
}

export default Movies;