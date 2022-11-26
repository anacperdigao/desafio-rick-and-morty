import React, { createContext, useEffect, useState } from "react"
import api from "../api/api";


//-------------- Criando o contexto
export const MainContext = createContext()
MainContext.displayName = 'MainContext'



//-------------- Criando o Provider
export const MainProvider = ({children}) => {

    const pages = ['Initial', 'Characters']
    const [pageState, setPageState] = useState(pages[0])
    const [apiData, setApiData] = useState({})
    const [name, setName] = useState("")
    const [status, setStatus] = useState("")
    const [gender, setGender] = useState("")
    const [pageApi, setPageApi] = useState(1)


    useEffect( () => {
        api
        .get(`/character/?page=${pageApi}&name=${name}&status=${status}&gender=${gender}`)
        .then((response) => {
            setApiData(response.data); 
        })
        .catch((erro) => {alert(`Ops! Ocorreu um erro: ${erro}`)})
    }, [pageApi, name, status, gender]);


    return(
        <MainContext.Provider value={[
            pages,
            pageState,
            setPageState,
            apiData, 
            setApiData,
            name, 
            setName,
            status, 
            setStatus,
            gender, 
            setGender,
            pageApi, 
            setPageApi
        ]}>
            {children}
        </MainContext.Provider>
    )
}