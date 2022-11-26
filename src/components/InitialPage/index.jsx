import React, { useContext } from 'react'
import * as S from "./styles"
import { MainContext } from '../../context/main'
import Background from '../../assets/images/wallpaper1.jpg'

const InitialPage = () => {

    const [ pages, pageState, setPageState ] = useContext(MainContext)

  return (

    <S.DivPage>

        <S.ImgBackground src={Background} alt="Background" />

        <S.DivInfo>
          <S.Title>Rick and Morty</S.Title>
          <S.SubTitle>Search for your favorite characters</S.SubTitle>
          <S.Button onClick={() => setPageState(pages[1])}>KNOW MORE</S.Button>
        </S.DivInfo>

    </S.DivPage>
  )
}

export default InitialPage