import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import {useContext} from 'react';
import {CardsContext} from './CardsContext';


export default function Form (){
    const {CreditCards} = useContext(CardsContext);
    const { handleSubmit, register, formState: { errors } } = useForm();
 
  
    const onSubmit = (values, e) => {
      const Card = CreditCards.filter(CreditCard => CreditCard.number === values.CardNumber);
   
      if (Card.length >0){
            alert(`Your card number is valid. It's type is: ${Card[0].type}`);
        }else{
            alert("Your card number is invalid");
        }

      e.target.reset();
  
    }
      
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();
    
    today = yyyy + '-' + mm + '-' + dd ;

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
            type="number" 
            placeholder= "Enter your Card Number"
            {...register("CardNumber", {
            required: "Required",
            validate: value => value.length ==  16
            })}
            />

            <ErrorMessage
            errors={errors}
            name="CardNumber"
            message = "invalid Card Number"
            render={({ message }) => <p>{message}</p>}
            />
            <input
            type="date" 
            placeholder= "Enter the Card Expiry Date"
            {...register("Expiry Date", {
            required: "Required",
            validate: value => value >= today
            })}
            />

            <ErrorMessage
            errors={errors}
            name="Expiry Date"
            message = "invalid Expiry Date"
            render={({ message }) => <p>{message}</p>}
           />

            <input
            type="number" 
            placeholder= "Enter the Card CVV"
            {...register("CVV", {
            required: "Required",
            validate: value =>( value.length ==  3) || (value.length ==  4)
            })}
            />

            <ErrorMessage
            errors={errors}
            name="CVV"
            message = "invalid CVV Number"
            render={({ message }) => <p>{message}</p>}
             />

            <button type="submit" >Submit</button>
        </form>
    )

}