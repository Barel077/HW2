import { Container, FormGroup, Row } from "react-bootstrap";
import Recipes from "../Comps/RecipesDone";
import React, { createContext, useContext, useState } from "react";
import Checkboxes from "../Comps/Checkboxes";


export const chosen = React.createContext();
export default function CreateRecipe() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [cm, setCm] = useState("");
    const [time, setTime] = useState(0);
    var chosenIngs = [];


    const PostRecipe = event => {
        if (chosenIngs.length === 0) {
            event.preventDefault();
            alert("At least one ingredient should be chosen!")
            return false;
        }

        const a = {
            id: 1,
            name: name,
            image: image,
            cookingMethod: cm,
            ings: chosenIngs,
            time: time
        }

        //Post Recipe
        fetch("https://localhost:7204/api/Recipes", {
            method: 'POST',
            body: JSON.stringify(a),
            headers: new Headers({
                'Content-type': 'application/json; charset=UTF-8'
            })

        })
            .then(res => {
                console.log('res=', res);
                return res.json()
            })
            .then(
                (result) => {
                    console.log("fetch POST= ", result);
                },
                (error) => {
                    console.log("err post=", error);
                });
    }


    return (
        <div style={{"marginTop":"50px"}}>
            <form onSubmit={PostRecipe}>
                <div className="row text-center">
                    <div className="col-md-12 mb-4">
                        <label>
                            Name:
                            <input type="text" name="Name" value={name} onChange={(e) => (setName(e.target.value))} required />
                        </label>
                    </div>
                    <div className="col-md-12 mb-4">
                        <label>
                            Image URL:
                            <input type="text" name="Image" value={image} onChange={(e) => (setImage(e.target.value))} required />
                        </label>
                    </div>
                    <div className="col-md-12 mb-4">
                        <label>
                            Cooking Method:
                            <input type="text" name="CM" value={cm} onChange={(e) => (setCm(e.target.value))} required />
                        </label>
                    </div>
                    <div className="col-md-12 mb-4">
                        <label>
                            Time (Minutes):
                            <input type="number" name="Time" value={time} onChange={(e) => (setTime(e.target.value))} required min={0} />
                        </label>
                    </div>
                    <div className="col-md-12 mb-4">
                        <input type="submit" value="Submit" />
                    </div>
                </div>
            </form>
            <Row>
                <chosen.Provider value={chosenIngs}>
                    <Checkboxes></Checkboxes>
                </chosen.Provider>
            </Row>
        </div>
    )

}