import '../App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from '../components/Home/Home';
import Recipes from '../components/Recipes/Recipes';
import FavoriteRecipes from '../components/FavoriteRecipes/FavoriteRecipes';
import Layout from '../components/Layout/Layout';
import NotFound from '../components/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/favorites" component={FavoriteRecipes} />
        </Layout>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;