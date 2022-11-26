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


  return (

    <S.Page>
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

      <S.DivPages>
        <S.ParagraphLoad onClick={handlePrevious}>
          &lt; Previous
        </S.ParagraphLoad>

        <S.ParagraphPages>Page {pageApi} out of {apiData.info.pages}</S.ParagraphPages>

        <S.ParagraphLoad onClick={handleNext}>
          Next &gt;
        </S.ParagraphLoad>
      </S.DivPages>

    </S.Page>
  )
}

export default CharactersPage