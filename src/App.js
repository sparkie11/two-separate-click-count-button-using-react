import { useState } from 'react';
import './App.css';

 function MyButton() {
function handleClick() {
  setcount(count+1);
}
const [count,setcount] =useState(0);
  return (
     <button onClick={handleClick}> clicked me {count} times 
     
    
     </button>
  
   );
 }

 export default function MyApp() {
  return(
<>
  <MyButton />
  <MyButton />

</>



  );
 }


        
      
  
