import React, { createContext, useState } from "react"



//-------------- Criando o contexto
export const MainContext = createContext()
MainContext.displayName = 'MainContext'



//-------------- Criando o Provider
export const MainProvider = ({children}) => {

    const pages = ['Initial', 'Characters', 'Episodes']
    const [pageState, setPageState] = useState(pages[0])
    

    return(
        <MainContext.Provider value={[
            pages,
            pageState,
            setPageState,
        ]}>
            {children}
        </MainContext.Provider>
    )
}