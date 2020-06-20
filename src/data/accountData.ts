export type accountData = {
    id: string;
    provider: provider;
    balance: balance;
    transactions: transaction[];
}

export type provider = {
    title: string;
    account_number: string;
    sort_code: string
    description: string;
}

export type balance = {
    amount: number;
    currency_iso: string;
}

export type transaction = {
    id: string;
    date: string;
    description: string
    category_title: string;
    amount: {
        value: number;
        currency_iso: string;
    };
}