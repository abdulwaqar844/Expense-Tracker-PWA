import React from 'react';
export const Transaction =({transaction})=>{
   const sign=transaction.transactionAmount > 0 ? "+" :"-";
    const transcationType=transaction.transactionAmount > 0 ? "plus" : "minus";
   return(
        <li className={transcationType}>
            {transaction.description}
    <span>{sign}${Math.abs(transaction.transactionAmount)}</span>
            <button className="delete-btn" >X</button>
        </li>
    )



}
