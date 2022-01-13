import { useReducer, useEffect, useRef } from "react";

const initialState = {
    isRunning: false,
    time: 0
};

const StopWatch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const ref = useRef(0);


    useEffect(() => {
        if (!state.isRunning) {
            return false;
        } 
        else{
            console.log('state.isRunning');

            ref.current = setInterval(() => dispatch({ type: 'tick' }), 1000);
            return () => {
                clearInterval(ref.current);
                ref.current = 0;
            };
        }
       
        
    }, [state.isRunning]);

    return (
        <>
            <h1>{state.time} Sec</h1>
            <div>
                <button type="button" onClick={() => dispatch({ type: 'start' })}>Start</button>
                <button type="button" onClick={() => dispatch({ type: 'stop' })}>Stop</button>
                <button type="button" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>

        </>
    );
}

//reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'start':
            return { ...state, isRunning: true };
        case 'stop':
            return { ...state, isRunning: false };
        case 'reset':
            return { isRunning: false, time: 0 };
        case 'tick':
            return { ...state, time: state.time + 1 };
        default:
            throw new Error();
    }

}

export default StopWatch;