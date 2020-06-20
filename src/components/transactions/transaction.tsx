import React from "react";
import { transaction } from "../../data/accountData";
import {
    FaShoppingBag,
    FaCar,
    FaGamepad,
    FaPizzaSlice,
    FaLemon,
    FaCashRegister,
    FaMoneyBill
} from 'react-icons/fa';

import "./transaction.scss"

const Transaction = ({ transaction }) => {
    const { id, date, description, category_title, amount }: transaction = transaction;

    const renderIcon = () => {
        switch (category_title) {
            case "Groceries":
                return <FaLemon />
            case "Income":
                return <FaCashRegister />
            case "Shopping":
                return <FaShoppingBag />
            case "Transport":
                return <FaCar />
            case "Eating Out":
                return <FaPizzaSlice />
            case "Entertainment":
                return <FaGamepad />
            case "Bills":
                return <FaMoneyBill />
            default:
                return null;
        }
    }

    return (
        <section className="transaction">
            <div>{category_title}</div>
            <div className="icon">
                {renderIcon()}
            </div>
            <div>{date}</div>
            <div>{description}</div>
            <div className="amount">{amount.value}</div>
        </section>
    );
}

export default Transaction;
