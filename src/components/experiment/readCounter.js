//useRef
import {useState, useEffect, useRef} from "react";

//useRef
const CountRender = () => {
    const [count, setCount] = useState("");
    const useReference = useRef();

    useEffect(() => {
        useReference.current++; 
        useReference.current = count;
    }, [count]);

    return (
      //tracking previous state
      <>
        <input type="text" value={count} onChange={(e) => {setCount(e.target.value)}} />
        <h1>Current state: {count}</h1>
        <h2>previous state: {useReference.current}</h2>
  
      </>

    );


  }

  export default CountRender;