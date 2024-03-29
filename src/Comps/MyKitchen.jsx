import { Component } from "react";
import Recipes from "./Recipes";
import RecipesDone from "./RecipesDone"
import CDishRecipe from "../JSClasses/CDishRecipe";
import { Container } from 'react-bootstrap';
import first from "../Images/first.jpg"
import second from "../Images/second.jpg"
import third from "../Images/third.jpg"


export class MyKitchen extends Component {
    constructor(props) {
        super(props);

        //'madeMealsCounter' --> How many meals are READY to eat.
        //'inPrep' --> All meals that are waiting to be made || 'ready' --> All meals that are ready to eat.
        this.state = {
            madeMealsCounter: 0,
            inPrep: [],
            ready: []
        }

        fetch("https://localhost:7204/api/Recipes")
        .then(res => {
            console.log('res=', res);
            return res.json();
        })
        .then(
            (result) => {
                console.log("fetch Get= ", result);
               this.setState({
                inPrep: [...result]
               } )
              
                
            },
            (error) => {
                console.log("err post=", error);
            });
    }


    ///////////////////////////////////////  FUNCTIONS  ///////////////////////////////////////



    //Removes a dish waiting to be cooked from 'inPrep' and pushes it into 'ready'.
    PrepDishToRdy = (clickedDish) => { console.log(this.state.inPrep)
        let newInPrep = [...this.state.inPrep];
        newInPrep = newInPrep.filter(dish => dish.name !== clickedDish.name);
        let newReady = [clickedDish, ...this.state.ready]

        this.setState({
            inPrep: [...newInPrep],
            ready: [...newReady],
            madeMealsCounter: this.state.madeMealsCounter + 1
        }
        )
    }

    //Removes a dish that was eaten from 'ready' and pushes it into 'inPrep'.
    RdyDishToPrep = (clickedDish) => {
        let newReady = [...this.state.ready];
        newReady = newReady.filter(dish => dish.name !== clickedDish.name);
        let newInPrep = [clickedDish, ...this.state.inPrep]

        this.setState({
            inPrep: [...newInPrep],
            ready: [...newReady],
            madeMealsCounter: this.state.madeMealsCounter - 1
        }
        )
    }



    ///////////////////////////////////////  RENDER  ///////////////////////////////////////


    render() {
        return (
            <div style={{"marginTop":"50px"}}>
                <div style={{ height: "75px", background: "lightblue", textAlign: "center", fontSize: "30px", fontWeight: "bold" }}>
                    <p>Dishes In Preparation</p>
                </div>
                <Container>
                    <Recipes inPrep={this.state.inPrep} prepDishToRdy={this.PrepDishToRdy} />
                </Container>
                <div style={{ height: "75px", background: "lightblue", textAlign: "center", fontSize: "30px", fontWeight: "bold" }}>
                    <p>Dishes Ready: {this.state.madeMealsCounter}</p>
                </div>
                <Container>
                    <RecipesDone ready={this.state.ready} rdyDishToPrep={this.RdyDishToPrep} rdyCounter={this.madeMealsCounter} />
                </Container>
            </div>
        )
    }
}