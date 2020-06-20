import React, { useState, useEffect } from "react";

import "./style/_resets.scss";
import Navigation from "./components/navigation/navigation";
import Account from "./components/account/account";

const App = () => {

    const [accountData, setAccountData] = useState(null);

    useEffect(() => {
        fetch("http://www.mocky.io/v2/5c62e7c33000004a00019b05")
            .then(response => response.json())
            .then(data => {
                setAccountData(data);
                console.log(data);
            });
    }, []);

    return (
        <div className="app">
            <Navigation />
            {accountData &&
                <Account accountData={accountData} />
            }
        </div>
    );
}

export default App;
