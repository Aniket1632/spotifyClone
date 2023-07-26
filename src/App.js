import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./screens/Home/Home";
import store from "./Store/Store";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="spotify-home" element={<Home />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
