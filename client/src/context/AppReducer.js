export default (state, action) => {
   switch (action.type) {
      case 'GET_TRANSACTIONS': {
         return {
            ...state,
            loading: false,
            transactions: action.payload
         };
      }
      case 'ADD': {
         return {
            ...state,
            transactions: [...state.transactions, action.payload],
         };
      }
      case 'EDIT': {
         return {
            ...state,
            transactions: state.transactions.map(transaction =>
               transaction._id === action.payload._id
                  ? (transaction = action.payload)
                  : transaction
            ),
         };
      }
      case 'TRANSACTION_ERROR': {
         return {
            ...state,
            error: action.payload
         }
      }
      case 'SET_ACTIVE':
         return {
            ...state,
            activeTransaction: action.payload,
         };
      case 'DELETE':
         return {
            ...state,
            transactions: state.transactions.filter(
               transaction => transaction._id !== action.payload
            ),
         };
      default:
         return state;
   }
};
