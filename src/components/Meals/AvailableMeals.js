import {useState, useEffect, useCallback} from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';


const AvailableMeals = (props) => {
    const [meals, setMeals] = useState([]);  
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError] = useState();

 
 useEffect(() => {
  const fetchMeals = async () => {
    setIsLoading(true);
    const response = await fetch('https://react-restaurant-app-70a9b-default-rtdb.firebaseio.com/meals.json'); 
    
    if(!response.ok) {
      throw new Error('Something went wrong!');
    }
    const data = await response.json();
    const loadedMeals = [];
    for(const key in data) {
      loadedMeals.push({
        id:key,
        name:data[key].name,
        description:data[key].description,
        price:data[key].price
      })
    }
    setMeals(loadedMeals);
    setIsLoading(false);
  };
    fetchMeals().catch(error => {
      setIsLoading(false);
      setError(error.message);

    });

  }, []);
  const mealsList = meals.map(meal => (
    <MealItem 
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description} 
        price={meal.price} 
    />
    ));
      let content = '';
    if(isLoading) {
      <section className={classes.mealsLoader}><p>Loading...</p></section>
    } 
    if(error){
      return (
        <section className={classes.mealsError}><p>{error}</p></section>
      )
    }

    return (
      <section className={classes.meals}>
        <Card>
          <ul>
            <section>{mealsList}</section>
          </ul>
        </Card>
      </section>
    )
}

export default AvailableMeals;