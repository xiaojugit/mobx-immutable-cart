import AppleBasket from './AppleBasket';
import { Store, StoreProvider } from '../stores';

const store = new Store();

function App () {
  return <StoreProvider store={store}>
    <AppleBasket ></AppleBasket>
  </StoreProvider>;
}

export default App;
