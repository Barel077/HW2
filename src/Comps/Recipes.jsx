
import { Row } from 'react-bootstrap';
import InPrepRecipe from './InPrepRecipe.jsx';


export default function Recipes(props) {


    function BuildRecipes() {
        let arr = []; 
       
        props.inPrep.forEach(element => {
            arr.push(<InPrepRecipe inPrep={element} prepDishToRdy={props.prepDishToRdy} />)
        });
        return (
            arr
        )
    }


    return (
        <Row>
            {BuildRecipes().map((rec) => rec)}
        </Row>
    )
}