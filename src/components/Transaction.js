import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Transaction = ({ transaction }) => {

    const { delTransaction } = useContext(GlobalContext);

    const sign = transaction.transactionAmount > 0 ? "+" : "-";
    const transcationType = transaction.transactionAmount > 0 ? "plus" : "minus";
    return (
        <li className={transcationType}>
            {transaction.description}
            <span>
                {sign}${Math.abs(transaction.transactionAmount)}
            </span>
            <button onClick={() => delTransaction(transaction.id)
            } >X</button>
        </li>
    )



}