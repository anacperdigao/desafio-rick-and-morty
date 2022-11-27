// React and hooks
import React, { useContext } from 'react';

// Components
import Cards from '../Cards';
import SearchBox from '../SearchBox';

// Context
import { MainContext } from '../../context/main';

// Style
import * as S from './styles';


const CharactersPage = () => {

  const [ pages, pageState, setPageState, apiData, setApiData, name, setName, status, setStatus, gender,
          setGender, pageApi, setPageApi, handlePrevious, handleNext, handleFirst, handleLast, handleClear
        ] = useContext(MainContext);


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
        <S.PageChanger onClick={handleFirst}>&lt;&lt; First</S.PageChanger>
        <S.PageChanger onClick={handlePrevious}>&lt; Previous</S.PageChanger>
        <S.PageNumber>Page {pageApi} - {apiData.info.pages}</S.PageNumber>
        <S.PageChanger onClick={handleNext}>Next &gt;</S.PageChanger>
        <S.PageChanger onClick={handleLast}>Last &gt;&gt;</S.PageChanger>
      </S.DivPagination>

    </S.DivPage>
  );
};

export default CharactersPage;
