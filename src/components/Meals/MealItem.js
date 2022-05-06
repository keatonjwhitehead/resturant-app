
const MealItem = (props) => {
    return (
        <div id = {props.id}>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <p>Price: {props.price}</p>
        </div>
    )
};

export default MealItem;