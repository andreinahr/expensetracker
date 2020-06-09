import React, { useState, useContext, useEffect, useRef } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const AddTransaction = () => {
   const [text, setText] = useState('');
   const [amount, setAmount] = useState(0);
   const { activeTransaction, addTransaction, editTransaction } = useContext(
      GlobalContext
   );
   let editMode = useRef(false);

   useEffect(() => {
      if (activeTransaction) {
         editMode.current = true;
         setText(activeTransaction.text);
         setAmount(activeTransaction.amount);
      }
   }, [activeTransaction]);

   const onSubmit = e => {
      e.preventDefault();

      const formTransaction = {
         _id: editMode.current ? activeTransaction?._id : null,
         text,
         amount: +amount,
      };

      editMode.current
         ? editTransaction(formTransaction)
         : addTransaction(formTransaction);
      setText('');
      setAmount(0);
      editMode.current = false;
   };

   return (
      <div>
         <h3>{editMode.current ? 'Edit' : 'Add new'} transaction</h3>
         <form onSubmit={onSubmit}>
            <div className="form-control">
               <label htmlFor="text">Text</label>
               <input
                  type="text"
                  value={text}
                  onChange={e => setText(e.target.value)}
                  placeholder="Enter text..."
               />
            </div>
            <div className="form-control">
               <label htmlFor="amount">
                  Amount <br />
                  (negative - expense, positive - income)
               </label>
               <input
                  type="number"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
               />
            </div>
            <button type="submit" className="btn">
               {editMode.current ? 'Edit' : 'Add'} transaction
            </button>
         </form>
      </div>
   );
};
