import React from "react";
import { accountData } from "../../data/accountData";

import "./account.scss"
import Transactions from "../transactions/transactions";

const Account = ({ accountData }) => {

    const { provider, balance, transactions }: accountData = accountData;

    return <>
        <section className="account">
            <div className="account-details">
                <h2>
                    {provider.title}
                </h2>
                <p>
                    {provider.description}
                </p>
                <div>
                    Account number: {provider.account_number}
                </div>
                <div>
                    Sort code: {provider.sort_code}
                </div>
            </div>
            <div className="account-balance">
                Balance
                    <div className="value">
                    £{balance.amount}
                </div>
            </div>
        </section>
        <Transactions transactions={transactions} />
    </>
}

export default Account;
