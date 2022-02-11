
import styles from './ExpenseDate.module.css';


const ExpenseDate = (props) => {


    const month = props.dateForED.toLocaleString( 'default', {month: 'long'} );
    const year = props.dateForED.getFullYear();
    const day = props.dateForED.getDate();


    return (

        <div className={ styles['expense-date'] } >
            <div className={ styles['expense-date__month'] }>{month}</div>
            <div className={ styles['expense-date__year'] }>{year}</div>
            <div className={ styles['expense-date__day'] }>{day}</div>  
        </div>

    );
};

export default ExpenseDate;
