import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

//Initial state
const initialState = {
   transactions: [],
   activeTransaction: null,
   error: null,
   loading: true,
};

const config = {
   header: { 'Content-Type': 'application/json' },
};

//Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState);

   //Actions
   async function getTransactions() {
      try {
         const res = await axios.get('/api/v1/transactions');
         dispatch({
            type: 'GET_TRANSACTIONS',
            payload: res.data.data,
         });
      } catch (error) {
         dispatch({
            type: 'TRANSACTION_ERROR',
            payload: error.response.data.error,
         });
      }
   }

   async function deleteTransaction(id) {
      debugger
      try {
         await axios.delete(`/api/v1/transactions/${id}`);
         dispatch({
            type: 'DELETE',
            payload: id,
         });
      } catch (error) {
         dispatch({
            type: 'TRANSACTION_ERROR',
            payload: error.response.data.error,
         });
      }
   }

   async function addTransaction(transaction) {
      try {
         const res = await axios.post('/api/v1/transactions', transaction, config);
         dispatch({
            type: 'ADD',
            payload: res.data.data,
         });
      } catch (error) {
         dispatch({
            type: 'TRANSACTION_ERROR',
            payload: error.response.data.error,
         });         
      }
   }

   async function editTransaction(transaction) {
      try {
         const res = await axios.post('/api/v1/transactions', transaction, config);
         dispatch({
            type: 'EDIT',
            payload: res.data.data,
         });
      } catch (error) {
         dispatch({
            type: 'TRANSACTION_ERROR',
            payload: error.response.data.error,
         });
      }
   }

   function setActiveTransaction(transaction) {
      dispatch({
         type: 'SET_ACTIVE',
         payload: transaction,
      });
   }

   return (
      <GlobalContext.Provider
         value={{
            transactions: state.transactions,
            activeTransaction: state.activeTransaction,
            error: state.error,
            loading: state.loading,
            setActiveTransaction,
            deleteTransaction,
            addTransaction,
            editTransaction,
            getTransactions,
         }}>
         {children}
      </GlobalContext.Provider>
   );
};
