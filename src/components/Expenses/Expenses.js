import styles from './Expenses.module.css';
import ExpenseItem from './ExpenseItem';//Each Row
import Card from '../UI/Card';//Border Radius


const Expenses = (props) => {
    return (

       
        <Card className={styles.expenses}>
            
            {/* ExpenseItem Expects props.data Parent-Child*/}
            {/* <ExpenseItem 
                // Expects dateForEI, titleForEI, priceForEI
                dateForEI={props.data[0].date}
                titleForEI={props.data[0].title}
                priceForEI={props.data[0].amount}
            />
            <ExpenseItem 
                dateForEI={props.data[1].date}
                titleForEI={props.data[1].title}
                priceForEI={props.data[1].amount}
            /> */}


            {/* Data Coming from App We have to Display as Per Array */}
            {/* Map Function (Apply Operation on every element of Array) */}
            
            { props.data.map (  para => (
                <ExpenseItem 
                    key={para.id}
                    dateForEI={para.date}
                    titleForEI={para.title}
                    priceForEI={para.amount}
                />
                ) )
            }
        
        </Card>
        

    );
};

export default Expenses;
