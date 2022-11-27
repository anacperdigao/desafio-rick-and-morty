// React and hooks
import React, { useContext } from 'react';

// Context
import { MainContext } from '../../context/main';

// Style
import * as S from './styles';


const SearchBox = () => {

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
          handlePrevious,
          handleNext,
          handleFirst,
          handleLast,
          handleClear ] = useContext(MainContext);


  return (
    <S.Box>
        <S.DivName>
            <S.Label htmlFor="name">Name: </S.Label>
            <S.InputName
                type="text"
                name="name"
                placeholder='e.g. rick sanchez'
                value={name}
                onChange={e => setName(e.target.value.toLowerCase())}
            />
        </S.DivName>

        <S.DivStatus>
            <S.Label htmlFor="status">Status: </S.Label>
            <S.Select name="status" id="status" onChange={e => setStatus(e.target.value)} value={status} >
                <option value=""></option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </S.Select>
        </S.DivStatus>

        <S.DivGender>
            <S.Label htmlFor="gender">Gender:</S.Label>
            <S.Select name="gender" id="gender" onChange={e => setGender(e.target.value)} value={gender}>
                <option value=""></option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </S.Select>
        </S.DivGender>

        <S.Button onClick={handleClear}>Clear filter</S.Button>

    </S.Box>
  );
};

export default SearchBox;
