import React from 'react';
import {
   Header,
   Balance,
   IncomeExpenses,
   TransactionList,
   AddTransaction,
} from './layout';
import { GlobalProvider } from '../context/GlobalState';

export const Home = () => {
   return (
      <GlobalProvider>
         <Header />
         <div className="container">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
         </div>
      </GlobalProvider>
   );
};
