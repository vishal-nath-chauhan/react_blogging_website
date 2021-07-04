import "./App.css";
import Home from "./components/Home";
import { useReducer } from "react";
import { Context, initialData } from "./reducer/index";
import {blogReducer} from './reducer/index'

function App() {
  const [state, dispatch] = useReducer(blogReducer, initialData);
  console.log("State ", state);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <Home />
      </div>
    </Context.Provider>
  );
}

export default App;
