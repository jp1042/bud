import React from "react";
import { accountData } from "../../data/accountData";

import "./account.scss"

const Account = ({ accountData }) => {

    const { provider, balance } = accountData as accountData;

    return (
        <section className="account">
            <div className="account-details">
                <h2>
                    {provider.title}
                </h2>
                <div>
                    {provider.account_number}
                </div>
                <div>
                    {provider.sort_code}
                </div>
                <p>
                    {provider.description}
                </p>
            </div>
            <div className="account-balance">
                Balance: {balance.amount}
            </div>
        </section>
    );
}

export default Account;
