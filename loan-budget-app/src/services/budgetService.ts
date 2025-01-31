function calculateBudget(prevExpenses: number, monthlyIncome: number, childcareCosts: number, dependents: number, savingsPercentage: number) {
    const totalBudget = monthlyIncome - prevExpenses;
    const savings = (savingsPercentage / 100) * totalBudget;
    const groceries = totalBudget * 0.3; // 30% for groceries
    const childcare = childcareCosts; // direct input for childcare costs
    const miscellaneous = totalBudget * 0.2; // 20% for miscellaneous expenses

    return {
        totalBudget,
        groceries,
        childcare,
        miscellaneous,
        savings,
    };
}

export { calculateBudget };