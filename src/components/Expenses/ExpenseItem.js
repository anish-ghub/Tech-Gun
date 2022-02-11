import styles from './ExpenseItem.module.css';
import ExpenseDate from './ExpenseDate';//In Row Only the Date Section
import Card from '../UI/Card';

// React Hook
// import { useState } from 'react';



const ExpenseItem = (props) => {



    // // Input Field: Variable constantly Changing So useState
    // const [inputTitle, setInputTitle] = useState('');
    // // If we Initialize with Anything that remains there 

    // // Input Field Change Function
    // const inputChangeHanlder = (event) =>{
    //     setInputTitle(event.target.value);
    // };



    // // After Value change we have to re-execute the component
    // const [changedTitle, setChangedTitle] = useState(props.titleForEI);
    
    // // By Clicking on Button Change the Title
    // const clickHandler = () =>{
    //     // Function
    //     // Change it with Input Value
    //     setChangedTitle(inputTitle);
    // };


    

    return (

        
        <Card className={styles['expense-item']}>


            <ExpenseDate dateForED={new Date(props.dateForEI)}/>


            <div className={styles['expense-item__description']}>


                {/* {JavaScript} */}
                {/* <h2>{changedTitle}</h2> */}
                <h2>{props.titleForEI}</h2>


                <div className={styles['expense-item__price']}>
                    {/* Expects price props */}
                    ${props.priceForEI}
                </div>


                {/* <input type="text" 
                    value={inputTitle}
                    // In order to Change Input Field
                    onChange={inputChangeHanlder}
                />


                <button onClick={clickHandler}>
                    Change Title
                </button> */}


            </div>


        </Card>
        
    );

}
export default ExpenseItem;