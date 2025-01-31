import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>Loan and Budget Recommender</h1>
            <nav>
                <ul>
                    <li><a href="#loan-recommender">Loan Recommender</a></li>
                    <li><a href="#budget-recommender">Budget Recommender</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;