import { useState } from "react";

const useConter = (counterValue = 0) => {
    const [counter, setCounter] = useState(counterValue);

    

    return { counter, setCounter, handleAdd, handleRemove };
};

export default useConter;
