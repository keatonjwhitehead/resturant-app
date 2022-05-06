import React, {useState} from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Cart from './components/Cart/Cart';
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
function App() {

  const[cartIsShown, setCartIsShown] = useState(false);
  const showCardHandler = () => {
    setCartIsShown(true);
  };
  const hideCardHandler = () => {
    setCartIsShown(false);
  };

  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log(error);
      
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }

  return (
<ErrorBoundary>
  <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCardHandler}/>}
      <Header onShowCart={showCardHandler} />
      <main>
        <Meals />
        
      </main>
      </CartProvider>
      </ErrorBoundary>
  );
}

export default App;
