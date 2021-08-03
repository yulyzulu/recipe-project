import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import family from '../../assets/static/family.jpg';
import lunch from '../../assets/static/lunch.jpg';


const Home = () => {
  return (
    <main className="container main">
      <section className="home-section">
        <header>
          <h1 className="header-home">Cooking Flavors</h1>
        </header>
        <div className="promo-section row">
          <img className="col-6 image-lunch" src={family} alt="family" />
          <p className="col-4 offset-1 text-promo">
          Happiness is sharing beautiful moments with your family, especially with delicious recipes every day!
          <Link to="/recipes" className="tab-link">Find recipes</Link>
          </p>
        </div>
        <div className="promo-section row">
          <p className="col-4 offset-1  text-promo">
            Cook like a professional and enjoy your favorite recipes made at home!
            <Link to="/favorites" className="tab-link">Find your favorites</Link>
          </p>
          <img className="col-6 offset-1 image-lunch" src={lunch} alt="Lunch" />
        </div>
      </section>
    </main>
  );
};

export default Home;