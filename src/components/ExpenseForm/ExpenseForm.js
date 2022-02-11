import React,{ useState } from 'react';
import styles from './ExpenseForm.module.css';



const ExpenseForm = (props) => {

    const [ enteredDate, setEnteredDate ] = useState('');
    const [ enteredTitle, setEnteredTitle ] = useState('');
    const [ enteredAmount, setEnteredAmount ] = useState('');

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    };
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    };

    const submitHandler = (event) =>{
        
        event.preventDefault();


        
        const inputFormData = {
            id:Math.random().toString(),
            date:new Date(enteredDate),
            title:enteredTitle,
            amount:enteredAmount
        };

        
        // Send Data Child To Parent: ExpenseForm To NewExpense
        props.dataFromExpenseForm(inputFormData);

        setEnteredDate('');
        setEnteredTitle('');
        setEnteredAmount('');

    };


    return (
        <form action="" onSubmit={submitHandler}>
            <div className={styles['new-expense__controls']}>


                <div className={styles['new-expense__control']}>
                    <label htmlFor="">Date</label>
                    <input 
                        type="date" 
                        name="" 
                        id="" 
                        value={enteredDate}
                        onChange={dateChangeHandler}    
                    />
                </div>

                <div className={styles['new-expense__control']}>
                    <label htmlFor="">Title</label>
                    <input 
                        type="text" 
                        name="" 
                        id="" 
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>

                <div className={styles['new-expense__control']}>
                    <label htmlFor="">Amount</label>
                    <input 
                        type="number" 
                        min="0.01"
                        step="0.01"
                        name="" 
                        id="" 
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>

                <div className={styles['new-expense__actions']}>
                    <button type="submit">Add Expense</button>
                </div>


            </div>
        </form>
    );
};

export default ExpenseForm;
