import Main from "./Main";
import {createStore} from "redux";
import {RootReducer} from "./reducers/reducer";
import {Provider} from "react-redux";

const store = createStore(RootReducer);

function App() {
  return (
      <div className="App">
          <Provider store={store}>
              <Main />
          </Provider>
      </div>
  );
}

export default App;
