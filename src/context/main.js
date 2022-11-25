import React, { createContext } from "react"



//-------------- Criando o contexto
export const MainContext = createContext()
MainContext.displayName = 'MainContext'



//-------------- Criando o Provider
export const MainProvider = ({children}) => {

    return(
        <MainContext.Provider>
            {children}
        </MainContext.Provider>
    )
}