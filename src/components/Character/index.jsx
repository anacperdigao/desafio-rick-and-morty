import React, { useContext } from 'react'
import { MainContext } from '../../context/main'
import * as S from './styles'


const Character = () => {

    const [ pages,
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
            showCharacter, 
            setShowCharacter,
        ] = useContext(MainContext)

    return (

        <S.ShowCharacter>
            <S.Dialog open={showCharacter}>

            <button onClick={() => setShowCharacter(false)}>Back</button>
            </S.Dialog>
        </S.ShowCharacter>

    )
}

export default Character