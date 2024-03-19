import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({children, authentiction=true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(()=>{
        // TODO: make it easier
        // if (authStatus == true) {
        //     navigate("/")
        // }else if (authStatus === false){
        //     navigate("/login")
        // }

        if (authentiction && authStatus !== authentiction) {
            navigate("/login")
        } else if(!authentiction && authStatus !== authentiction){
            navigate("/")
        }
        setLoader(false)
    },[authStatus, navigate, authentiction])

  return loader ? <h1>Loding...</h1> : <>{children}</>
}


