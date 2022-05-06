import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
    const cartItems = (
        <ul className={classes['cart-items']}>
            {
                [
                    {id:'c1', 
                    name: 'Sushi', 
                    amount:2, 
                    price: 12.99
                    },
                    {id:'c2', 
                    name: 'Carb', 
                    amount:2, 
                    price: 13.99
                    },
                    {id:'c3', 
                    name: 'Rice Bowl', 
                    amount:2, 
                    price: 4.99
                    }
                ].map((item) => <li>{item.name}</li>)
            }
        </ul>
        );
    return (
        <Modal onHideCartHandler={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>31.99</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
};

export default Cart;