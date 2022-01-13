import { useState } from "react";

const IncrementItem = () => {
    //useState
    const [name, setName] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    //updating class name
    const updateName = () => {
        return setName((previousState) => { return {...previousState, brand: "NVEGS "} });
    }


    return (
        <>
            <h2>Welcome Back {name.brand}</h2>
            <button onClick={updateName}>Click to update</button>
        </>

    );
}

export default IncrementItem;