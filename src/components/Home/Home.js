import React from 'react';
import './Home.css';
import family from '../assets/static/family.jpg';
import lunch from '../assets/static/lunch.jpg';


const Home = () => {
  return (
    <main className="container main">
      <section className="home-section">
        <header>
          <h1 className="header-home">Cooking Flavors</h1>
        </header>
        <div className="promo-section row">
          <img className="col-6 image-lunch" src={lunch} alt="Lunch" />
          <p className="col-4 offset-1  text-promo">
          Enjoy delicious recipes prepared by yourself!
          </p>
        </div>
        <div className="promo-section row">
          <p className="col-4 offset-1 text-promo">
          Happiness is sharing beautiful moments with your family, especially with delicious recipes every day!
          </p>
          <img className="col-6 offset-1 image-lunch" src={family} alt="family" />
        </div>
      </section>
    </main>
  );
};

export default Home;