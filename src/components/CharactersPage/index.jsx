import React, { useContext } from 'react'
import { MainContext } from '../../context/main'
import Cards from '../Cards'
import SearchBox from '../SearchBox'
import * as S from './styles'


const CharactersPage = () => {

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
          setPageApi
      ] = useContext(MainContext)


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


  return (

    <S.DivPage>

      <S.Header>
        <S.Title onClick={() => setPageState(pages[0])}>Rick and Morty</S.Title>
        <S.SubTitle>Search for your favorite characters</S.SubTitle>
      </S.Header>

      <SearchBox />

      <S.DivCards>
        {apiData.results.map(item => 
          <Cards
            key={item.id}
            image={item.image}
            name={item.name}
            status={item.status}
            species={item.species}
            gender={item.gender}
            origin={item.origin.name}
            location={item.location.name}
            subspecies={item.type}
          />
        )}
      </S.DivCards>

      <S.DivPagination>
        <S.Paragraph onClick={handleFirst}>&lt;&lt; First</S.Paragraph>
        <S.Paragraph onClick={handlePrevious}>&lt; Previous</S.Paragraph>
        <S.ParagraphPages>Page {pageApi} - {apiData.info.pages}</S.ParagraphPages>
        <S.Paragraph onClick={handleNext}>Next &gt;</S.Paragraph>
        <S.Paragraph onClick={handleLast}>Last &gt;&gt;</S.Paragraph>
      </S.DivPagination>

    </S.DivPage>
  )
}

export default CharactersPage