
import { Row } from 'react-bootstrap';
import RdyRecipe from './RdyRecipe.jsx';


export default function Recipes(props) {


    function BuildRecipes() {
        let arr = [];
        props.ready.forEach(element => {
            arr.push(<RdyRecipe inPrep={element} rdyDishToPrep={props.rdyDishToPrep} />)
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