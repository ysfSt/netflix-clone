import "./App.css";
import Home from "./Components/Home/Home";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ItemSelectedPage from "./Components/ItemSelectedPage/ItemSelectedPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:type/:id" exact component={ItemSelectedPage} />
      </Switch>
    </div>
  );
}

export default App;
