import React from "react";
import Transaction from "./transaction";

import "./transactions.scss"

const Transactions = ({ transactions }) => {
    return (
        <section className="transactions">
            {transactions.map(transaction =>
                <Transaction transaction={transaction} />
            )}
        </section>
    );
}

export default Transactions;
