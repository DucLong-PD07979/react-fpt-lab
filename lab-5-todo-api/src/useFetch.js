/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useFetch = (callback = () => {}, depedence = []) => {
    const [isLoader, setIsLoader] = useState("idle");
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState("");
    const [result, setResult] = useState([]);

    useEffect(() => {
        const handleFetch = async () => {
            try {
                setIsLoader(true);
                const res = await callback();
                setIsLoader(false);
                setResult(res.data);
            } catch (error) {
                setIsError(error);
                setMessage(error.message);
            }
        };

        handleFetch();
    }, depedence);
    return { isLoader, isError, message, result };
};

export default useFetch;
