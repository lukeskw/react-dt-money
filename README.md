# DT MONEY App

DT MONEY is a finance application that helps users track their expenses and income. Users can add transactions with a description, price, category, and specify if it's income or an expense. The homepage features a dashboard displaying a list of transactions, a summary of income, expenses, and total spent. Additionally, users can search for specific transactions.

## 🚀 Technologies

- [x] [TypeScript](https://www.typescriptlang.org)
- [x] [React](https://reactjs.org)
- [x] [Styled Components](https://styled-components.com)
- [x] [JSON Server](https://github.com/typicode/json-server)

## Application Screenshots

### Homepage

![homepage](/public/README/homepage.png)

> The dashboard displays a list of transactions with their description, price, category, and whether it's income or an expense. It also shows a summary of income, expenses, and total spent.

### Transaction Modal

![modal](/public/README/modal.png)

> Users can add a new transaction using this modal. They can input the description, price, select a category, and choose whether it's income or an expense.

## Running the application

<details>
<summary>Setting up the environment</summary>

### Setting up the environment

Make sure you have [Node.js](https://nodejs.org) installed on your system.

1. Cloning the repository

   ```bash
   git clone https://github.com/your-username/dt-money.git
   cd dt-money
   ```

2. Installing dependencies

   ```bash
   npm install
   ```

3. Running the application

   ```bash
   npm run dev
   npm run server
   ```

   > Access the application at http://localhost:5173.

</details>

## Json-Server Endpoints

### Transactions

**GET /transactions: Get all transactions**

**POST /transactions: Add a new transaction**

## Requirements

### Functional Requirements

- [x] Users can add transactions with a description, price, category, and type (income or expense).
- [x] Homepage displays a dashboard with a list of transactions and a summary of income, expenses, and total spent.
- [x] Users can search for transactions by description.

### Non-Functional Requirements

- [x] Application must be built using TypeScript for type safety.
- [x] React components must be styled using Styled Components for easy styling management.
- [x] Application data must be connected to a mock API using JSON Server for development.

## Notes

- The application is designed to help users manage their finances easily.
- Users' data is not persisted permanently, as this is a mock API for demonstration purposes.
- The app is connected to a mock API via JSON Server for development, allowing for easy testing of API interactions.

Feel free to explore and enjoy using DT MONEY for your financial tracking needs!
