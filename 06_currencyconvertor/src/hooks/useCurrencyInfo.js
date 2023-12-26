// building custom hooks

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    console.log(currency);
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(res =>res.json())
        .then(res => setData(res[currency]))
        .catch(err=>console.error(err))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;


