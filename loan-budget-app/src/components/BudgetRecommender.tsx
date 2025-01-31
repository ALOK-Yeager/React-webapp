import React, { useState } from 'react';

const BudgetRecommender: React.FC = () => {
    const [prevExpenses, setPrevExpenses] = useState(0);
    const [monthlyIncome, setMonthlyIncome] = useState(0);
    const [childcareCosts, setChildcareCosts] = useState(0);
    const [dependents, setDependents] = useState(0);
    const [savingsPercentage, setSavingsPercentage] = useState(0);
    const [budgetBreakdown, setBudgetBreakdown] = useState<any>(null);

    const calculateBudget = () => {
        const totalBudget = monthlyIncome - prevExpenses;
        const savings = (savingsPercentage / 100) * totalBudget;
        const groceries = totalBudget * 0.3; // 30% for groceries
        const childcare = childcareCosts; // direct input
        const miscellaneous = totalBudget - (groceries + childcare + savings);

        setBudgetBreakdown({
            totalBudget,
            groceries,
            childcare,
            miscellaneous,
            savings,
        });
    };

    return (
        <div>
            <h2>Budget Recommender</h2>
            <input
                type="number"
                placeholder="Previous Expenses"
                value={prevExpenses}
                onChange={(e) => setPrevExpenses(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="Monthly Income"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="Childcare Costs"
                value={childcareCosts}
                onChange={(e) => setChildcareCosts(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="Number of Dependents"
                value={dependents}
                onChange={(e) => setDependents(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="Savings Percentage"
                value={savingsPercentage}
                onChange={(e) => setSavingsPercentage(Number(e.target.value))}
            />
            <button onClick={calculateBudget}>Calculate Budget</button>

            {budgetBreakdown && (
                <div>
                    <h3>Budget Breakdown</h3>
                    <p>Total Budget: ${budgetBreakdown.totalBudget.toFixed(2)}</p>
                    <p>Groceries: ${budgetBreakdown.groceries.toFixed(2)}</p>
                    <p>Childcare Costs: ${budgetBreakdown.childcare.toFixed(2)}</p>
                    <p>Miscellaneous: ${budgetBreakdown.miscellaneous.toFixed(2)}</p>
                    <p>Savings: ${budgetBreakdown.savings.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
};

export default BudgetRecommender;