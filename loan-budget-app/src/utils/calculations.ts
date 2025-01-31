export const calculateLoanRecommendation = (data) => {
    const { Monthly_Income, Credit_Score, Existing_Loans, Dependents, Childcare_Costs, Govt_Aid } = data;

    // Placeholder logic for loan recommendation
    let loanType = '';
    if (Credit_Score > 700 && Existing_Loans === 0) {
        loanType = 'Premium Loan';
    } else if (Credit_Score > 600) {
        loanType = 'Standard Loan';
    } else {
        loanType = 'Basic Loan';
    }

    return loanType;
};

export const calculateBudget = (data) => {
    const { Prev_Expenses, Monthly_Income, Childcare_Costs, Dependents, Savings_Percentage } = data;

    const totalBudget = Monthly_Income - Prev_Expenses;
    const savings = (Savings_Percentage / 100) * totalBudget;
    const groceries = totalBudget * 0.3; // 30% for groceries
    const childcare = Childcare_Costs; // Directly using childcare costs
    const miscellaneous = totalBudget - (savings + groceries + childcare);

    return {
        totalBudget,
        groceries,
        childcare,
        miscellaneous,
        savings,
    };
};