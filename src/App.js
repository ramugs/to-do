import "./App.css";
import Index from "./routers";
import "remixicon/fonts/remixicon.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Index />
      </Provider>
    </>
  );
}

export default App;
