import React, { useState } from "react";
import { transaction } from "../../data/accountData";
import {
    FaShoppingBag,
    FaCar,
    FaGamepad,
    FaPizzaSlice,
    FaLemon,
    FaCashRegister,
    FaMoneyBill,
    FaArrowLeft,
    FaArrowRight
} from 'react-icons/fa';

import "./transaction.scss"

const Transaction = ({ transaction }) => {
    const { id, date, description, category_title, amount }: transaction = transaction;

    const [displayDetail, setDisplayDetail] = useState(false);

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

    const renderArrow = (amount) => {
        if (Math.sign(amount) === 1) {
            return <div className="arrow-icon left">
                <FaArrowLeft />
            </div>
        }

        return <div className="arrow-icon right">
            <FaArrowRight />
        </div>
    }

    return (
        <>
            <section
                className="transaction"
                tabIndex={1}
                onClick={(e) => { e.preventDefault(); setDisplayDetail(!displayDetail) }}
            >
                <div className="type">
                    <div>{category_title}</div>
                    <div className="icon">
                        {renderIcon()}
                    </div>
                </div>
                <div className="info">
                    <div>{description}</div>
                    <div className="date">{date}</div>
                </div>
                <div className="amount">
                    {renderArrow(amount.value)}
                    <div>- £{amount.value * -1}</div>
                </div>
            </section>
            {displayDetail &&
                <section
                    className="transaction-detail"
                    onClick={(e) => { e.preventDefault(); setDisplayDetail(!displayDetail) }}
                >
                    id: {id}
                </section>
            }
        </>
    );
}

export default Transaction;
