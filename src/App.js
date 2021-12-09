import styled from 'styled-components';
import './App.css';
import Cart from './Components/Cart/Cart';
import Products from './Pages/Products/Products';

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    margin-right: auto;
`;
function App() {
  return (
    <Wrapper className="App">
      <Products></Products>
      <Cart></Cart>
    </Wrapper>
  );
}

export default App;
