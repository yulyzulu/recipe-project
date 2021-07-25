import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <main>
      <Navbar />
      <section className="recipe-app">
        <h1>Cooking Flavors</h1>
        <p>Here you can find delicious recipes and sorprice your families or friends</p>

      </section>
    </main>
  );
};

export default Home;