import Main from "./Main";
import {createStore} from "redux";
import {RootReducer} from "./reducer/reducer";
import {Provider} from "react-redux";

const store = createStore(RootReducer);

function App() {
  return (
      <Provider store={store}>
          <Main />
      </Provider>
  );
}

export default App;
