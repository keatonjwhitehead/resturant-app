import { useRef, useState } from 'react';
import classes from './Checkout.module.css';
const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {
    const [formInputsValidity, setformInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    })

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setformInputsValidity({
        name:enteredNameIsValid,
        street: enteredStreetIsValid,
        city: enteredCityIsValid,
        postalCode: enteredPostalCodeIsValid
    });

    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalCodeIsValid && enteredCityIsValid;
    
    if(!formIsValid){
        return;
    }
    props.onConfirm({
        name:enteredName,
        street:enteredStreet,
        city:enteredCity,
        postalCode:enteredPostalCode
    });

  };
  const controlClasses = (val) => {
      return`${classes.control} ${val ? '' : classes.invalid}`
  }

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={controlClasses(formInputsValidity.name)}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!formInputsValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={controlClasses(formInputsValidity.street)}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}/>
        {!formInputsValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={controlClasses(formInputsValidity.postalCode)}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef}/>
        {!formInputsValidity.postalCode && <p>Please enter a valid postal code</p>}
      </div>
      <div className={controlClasses(formInputsValidity.city)}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef}/>
        {!formInputsValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;