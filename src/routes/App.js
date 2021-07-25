import '../App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from '../components/Home';
import Recipes from '../components/Recipes';
import FavoriteRecipes from '../components/FavoriteRecipes';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/favorites" component={FavoriteRecipes} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;