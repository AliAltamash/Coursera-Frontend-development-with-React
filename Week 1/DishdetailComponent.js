/** WEEK 1 SOLUTION
 * FRONT-END WEB DEVELOPMENT WITH REACT
 * COURSERA.ORG
 * ALI ALTAMASH
 */
import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        if(dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else
        return(
            <div />
        );
    }



    renderComments(comments) {
        if (comments != null) {
          let options = { year: "numeric", month: "short", day: "numeric" };
          return comments.comments.map(comment => (
            <ul key={comment.id} className="list-unstyled">
              <li className="mb-2">{comment.comment}</li>
              <li>
                -- {comment.author}{" "}
                {new Date(comment.date).toLocaleDateString("en-US", options)}
              </li>
            </ul>
          ));
        } else return <div />;
      }

    render(){
        const dish= this.props.selectedDish;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments:</h4>
                        {this.renderComments(dish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail; 