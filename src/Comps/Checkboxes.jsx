
import React, { Component, useState } from "react";
import { Col } from "react-bootstrap";
import Ingredient from "./Ingredient";
import { chosen } from "../Pages/CreateRecipe"


export const Theme = React.createContext();
export default class Checkboxes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingArr: []
        }

        fetch("https://localhost:7204/api/Ingredients")
            .then(res => {
                console.log('res=', res);
                return res.json();
            })
            .then(
                (result) => {
                    console.log("fetch Get= ", result);
                    this.setState({
                        ingArr: result
                    })

                },
                (error) => {
                    console.log("err post=", error);
                });

    }

    render() {
        return (
            this.state.ingArr.map((item) => (
                <Theme.Provider value={this.ingArr}>
                    <chosen.Consumer>
                        {chosenIngs => {
                            return <Col>
                                <Ingredient item={item} chosenIngs={chosenIngs}></Ingredient>
                            </Col>
                        }}
                    </chosen.Consumer>
                </Theme.Provider>
            ))
            )


    }
}

