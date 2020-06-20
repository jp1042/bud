import { transaction } from "./accountData";

export const filterExpendature = (transactions: transaction[]): transaction[] => {
    return transactions.filter(t => Math.sign(t.amount.value) === -1);
};

export const sortByLowestExpendature = (transactions: transaction[]): transaction[] => {
    return transactions.sort((b, a) => a.amount.value - b.amount.value);
};

export const sortByDate = (transactions: transaction[], Moment): transaction[] => {
    return transactions.sort((a, b) => new Moment(a.date).format('YYYYMMDD') - new Moment(b.date).format('YYYYMMDD'));
};

