import React, { useState } from 'react';
import { getLoanRecommendations } from '../services/loanService';

const LoanRecommender: React.FC = () => {
    const [monthlyIncome, setMonthlyIncome] = useState<number>(0);
    const [creditScore, setCreditScore] = useState<number>(0);
    const [existingLoans, setExistingLoans] = useState<boolean>(false);
    const [dependents, setDependents] = useState<number>(0);
    const [childcareCosts, setChildcareCosts] = useState<number>(0);
    const [govtAid, setGovtAid] = useState<boolean>(false);
    const [loanRecommendations, setLoanRecommendations] = useState<string[]>([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const recommendations = await getLoanRecommendations({
            monthlyIncome,
            creditScore,
            existingLoans: existingLoans ? 1 : 0,
            dependents,
            childcareCosts,
            govtAid: govtAid ? 1 : 0,
        });
        setLoanRecommendations(recommendations);
    };

    return (
        <div className="loan-recommender">
            <h2>Loan Recommender</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Monthly Income" onChange={(e) => setMonthlyIncome(Number(e.target.value))} />
                <input type="number" placeholder="Credit Score" onChange={(e) => setCreditScore(Number(e.target.value))} />
                <label>
                    Existing Loans:
                    <input type="checkbox" onChange={(e) => setExistingLoans(e.target.checked)} />
                </label>
                <input type="number" placeholder="Dependents" onChange={(e) => setDependents(Number(e.target.value))} />
                <input type="number" placeholder="Childcare Costs" onChange={(e) => setChildcareCosts(Number(e.target.value))} />
                <label>
                    Government Aid:
                    <input type="checkbox" onChange={(e) => setGovtAid(e.target.checked)} />
                </label>
                <button type="submit">Get Recommendations</button>
            </form>
            <div className="recommendations">
                <h3>Recommended Loan Schemes:</h3>
                <ul>
                    {loanRecommendations.map((loan, index) => (
                        <li key={index}>{loan}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LoanRecommender;