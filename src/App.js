import { Provider } from 'react-redux';
import './App.css';
import Cart from './Components/Cart/Cart';
import Products from './Pages/Products/Products';
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <div className="w-full flex">
        <Products></Products>
        <Cart></Cart>
      </div>
    </Provider>
  );
}

export default App;
