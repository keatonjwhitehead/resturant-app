import React from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import { Fragment } from 'react/cjs/react.production.min';

const Meals = (props) => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    )
}

export default Meals;