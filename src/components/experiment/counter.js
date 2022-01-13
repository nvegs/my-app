import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    const setCal = () => {
        return setCalculation(() => count * 2);
    }

    //perform a side effect when the count variable updates
    useEffect(setCal, [count]);

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <button onClick={() => setCount((c) => c - 1)}>-</button>
            <p>Calculation: {calculation}</p>
        </>
    );
}


export default Counter;