# loan-budget-app

This project is a React application designed to provide loan recommendations for single mothers and a budget recommender system. The application takes user inputs and utilizes AI to suggest suitable loan schemes and calculates a recommended budget breakdown for the next month.

## Features

- **Loan Recommender**: 
  - Takes user inputs such as monthly income, credit score, existing loans, dependents, childcare costs, and government aid status.
  - Displays recommended loan schemes based on the provided data using an AI service.

- **Budget Recommender**: 
  - Accepts inputs for previous expenses, monthly income, childcare costs, dependents, and savings percentage.
  - Calculates and displays the recommended budget for the next month, including allocations for groceries, childcare costs, miscellaneous expenses, and savings.

## Project Structure

```
loan-budget-app
├── src
│   ├── components
│   ├── services
│   ├── styles
│   ├── utils
│   ├── App.tsx
│   └── index.tsx
├── public
│   └── index.html
├── package.json
├── tsconfig.json
├── .env
├── .gitignore
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd loan-budget-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys for the AI service.

4. Run the application locally:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Deployment

To deploy the application on Vercel:

1. Push your code to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com) and import your GitHub repository.
3. Follow the prompts to deploy your application.

## License

This project is licensed under the MIT License.