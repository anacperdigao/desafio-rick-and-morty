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
        .catch((erro) => {
          alert(`Ops! The name "${name}" doesn't exist!`);
          setName("");
        })
    }, [pageApi, name, status, gender]);


    const handlePrevious = () => {
      if(pageApi <= 1) return
      setPageApi(parseInt(pageApi - 1))
    }

    const handleNext = () => {
      if(apiData.info.next === null) return
      setPageApi(parseInt(pageApi + 1))
    }

    const handleFirst = () => {
      setPageApi(1)
    }

    const handleLast = () => {
      setPageApi(apiData.info.pages)
    }

    const handleClear = () => {
      setName("")
      setGender("")
      setStatus("")
      setPageApi(1)
    }


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
            setPageApi,
            handlePrevious,
            handleNext,
            handleFirst,
            handleLast,
            handleClear
        ]}>
            {children}
        </MainContext.Provider>
    )
}
