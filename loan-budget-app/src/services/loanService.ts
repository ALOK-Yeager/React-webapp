export const fetchLoanRecommendations = async (userData) => {
    const response = await fetch('https://api.example.com/loan-recommendations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
        },
        body: JSON.stringify(userData)
    });

    if (!response.ok) {
        throw new Error('Failed to fetch loan recommendations');
    }

    const data = await response.json();
    return data;
};

export const getLoanTypes = async () => {
    const response = await fetch('https://api.example.com/loan-types', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch loan types');
    }

    const data = await response.json();
    return data;
};