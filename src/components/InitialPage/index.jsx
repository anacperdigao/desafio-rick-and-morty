import React, { useContext } from 'react'
import * as S from "./styles"
import rick from '../../assets/images/rickandmorty.png'
import { MainContext } from '../../context/main'

const InitialPage = () => {

    const [ pages, pageState, setPageState ] = useContext(MainContext)

  return (

    <S.DivPage>

        <S.DivTitles>
            <S.Title1>Greetings!!</S.Title1>
            <S.Title2>Click on the image to discover a new world...</S.Title2>
        </S.DivTitles>

        <S.ImageLogo src={rick} alt="logo" onClick={() => setPageState(pages[1])}/>

    </S.DivPage>
  )
}

export default InitialPage