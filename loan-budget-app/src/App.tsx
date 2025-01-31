import React from 'react';
import Header from './components/Header';
import LoanRecommender from './components/LoanRecommender';
import BudgetRecommender from './components/BudgetRecommender';
import Footer from './components/Footer';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <LoanRecommender />
        <BudgetRecommender />
      </main>
      <Footer />
    </div>
  );
};

export default App;