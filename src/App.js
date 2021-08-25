import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/action";

let  App = () => {
  let state = useSelector((state) => state);

  console.log(state);
 
   let dispatch = useDispatch();
   
  return (
    <>
         <button 
           onClick = {
             () =>{
               dispatch(fetchUsers());
             }
           }
         
         >
          click me
         </button>

    </>
  )
}

export default App;
