import React from "react";
import { accountData } from "../../data/accountData";

const Account = ({ accountData }) => {

    const { provider } = accountData as accountData;

    return (
        <section className="account">
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
        </section>
    );
}

export default Account;
