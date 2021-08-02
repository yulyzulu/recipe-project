import '../App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../components/Home/Home';
import Recipes from '../components/Recipes/Recipes';
import FavoriteRecipes from '../components/FavoriteRecipes/FavoriteRecipes';
import Layout from '../components/Layout/Layout';
import NotFound from '../components/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/favorites" component={FavoriteRecipes} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;