import React from 'react';
import styles from './NewExpense.module.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    // Getting Data From Child 
    const dataFromExpenseFormHandler = (dataFromExpenseForm) => {
        
        // Sending Data NewExpense To App (Child To Parent)
        props.dataFromNewExpense(dataFromExpenseForm);
    };

    
    return (
        <div className={styles['new-expense']}>
            <ExpenseForm 
                dataFromExpenseForm = {dataFromExpenseFormHandler}
            />
            
        </div>
    );
};

export default NewExpense;
