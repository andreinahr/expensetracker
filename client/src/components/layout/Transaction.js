import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { numberWithCommas } from '../../utils/format';

export const Transaction = ({ transaction }) => {
   let { deleteTransaction, setActiveTransaction } = useContext(GlobalContext);
   const sign = transaction.amount < 0 ? '-' : '+';

   return (
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
         {transaction.text}
         <span>
            {sign}${numberWithCommas(Math.abs(transaction.amount))}
         </span>
         <button
            className="action-btn delete-btn"
            onClick={() => deleteTransaction(transaction._id)}>
            &#10007;
         </button>
         <button
            className="action-btn edit-btn"
            onClick={() => setActiveTransaction(transaction)}>
            &#9998;
         </button>
      </li>
   );
};
