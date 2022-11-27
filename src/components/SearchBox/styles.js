import styled from 'styled-components';
import { lightGray, lightGreen, red } from '../UI/colorVar';


export const Box = styled.div`
    background-color: ${lightGray};
    width: 100%;
    height: 15vh;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;

    @media screen and (max-width: 480px){
      flex-direction: column;
      height: 220px;
      justify-content: center;
      align-items: baseline;
      gap: 15px;
    }
`

export const DivInput = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

export const DivSelect = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

    @media screen and (max-width: 480px){
      width: 100%;
    }
`

export const InputName = styled.input`
    height: 40px;
    width: 260px;
    padding: 5px 10px;
    outline: none;
    border-radius: 5px;
    border: none;
    font-size: 1rem;

    @media screen and (max-width: 480px){
      width: 100%;
      height: 30px;
    }
`

export const Select = styled.select`
    height: 40px;
    width: 150px;
    padding: 5px 10px;
    outline: none;
    border-radius: 5px;
    border: none;
    font-size: 1rem;

    @media screen and (max-width: 480px){
      width: 100%;
      height: 30px;
    }
`

export const Label = styled.label`
    font-size: 1.25rem;
    color: ${lightGreen};
`

export const Button = styled.button`
    background-color: ${red};
    font-size: 0.875rem;
    color: white;
    height: 40px;
    width: 100px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    :hover{
        opacity: 0.9;
    }

    @media screen and (max-width: 480px){
      align-self: center;
    }
`
