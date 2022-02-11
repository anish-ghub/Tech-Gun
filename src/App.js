import React,{ useState, useEffect } from 'react';//React.Fragment
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/ExpenseForm/NewExpense.js';


// After Refresh all Inserted Data Gone Solution: API
// Frontend and Backend Code Separate
// const Dummy_Expense = [

//     {
//         id:'e1',
//         date: new Date(2021, 0, 12),
//         title : 'Car Insurence',
//         amount: '200'
//     },
//     {
//         id:'e2',
//         date: new Date(2021, 1, 24),
//         title : 'Bike Insurence',
//         amount: '250'
//     }

// ];



const App = () => {


    // Always Updated Data
    const [ expenseDataArray, setExpenseDataArray ] = useState([]);


    const dataFromNewExpenseHandler = (dataFromNewExpense) => {

        // const updatedExpenseArray = [
        //     dataFromNewExpense, ...expenseArray
        // ];
        // setExpenseArray(updatedExpenseArray);


        // Post/Sending the Data into Firebase:
        fetch( 'https://react-hooks-bc82e-default-rtdb.firebaseio.com/Expense.json', {
            method : 'POST',
            body : JSON.stringify(dataFromNewExpense),
            headers : { 'Content-Type' : 'application/json' }
        } ).then( (res) => {
            // After Sending the Data , Fetch/Get data to Display
            getdData();
        } );
        
    };
    

    // Getting the Data From Firebase
    const getdData = () => {

        fetch( 'https://react-hooks-bc82e-default-rtdb.firebaseio.com/Expense.json', {
            method : 'GET'
        } ).then( (res) => {
            // json returns a Promise
            return res.json();
        } ).then( (firebaseData) => {

            const loadedData = [];
            for( const key in firebaseData ){
                const localData = {
                    id: key,
                    ...firebaseData[key]
                };
                loadedData.push(localData);
            };

            // For this set Re-render every time : Infinite Loop
            setExpenseDataArray(loadedData);
            
        } );
    };
   
    useEffect( () => {
        getdData();
    }, [] );
    // [ Dependency for which It Re-render ] : External
    // set: No need as React Promises Latest Data



    return (

        <React.Fragment>

            <NewExpense 
                dataFromNewExpense={dataFromNewExpenseHandler}
            />

            {/* Data Parent To Child */}
            {/* Always Updated Data */}
            <Expenses data={expenseDataArray}/>
            
        </React.Fragment>

    );

};


export default App;