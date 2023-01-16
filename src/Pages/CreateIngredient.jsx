import { Container, FormGroup, Row } from "react-bootstrap";
import Recipes from "../Comps/RecipesDone";
import { useState } from "react";

export default function CreateIngredient() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [cal, setCal] = useState(0);


    const PostIngredient = event => {
        event.preventDefault();
        const a = {
            id: 1,
            name: name,
            image: image,
            cal: cal
        }
        fetch("https://localhost:7204/api/Ingredients", {
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
            <form onSubmit={PostIngredient} >
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
                            Calories:
                            <input type="number" name="Cal" value={0} onChange={(e) => (setCal(e.target.value))} required />
                        </label>
                    </div>
                    <div className="col-md-12 mb-4">
                        <input type="submit" value="Submit" /></div>
                </div>
            </form >
        </div >
    )
}