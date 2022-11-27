import styled from 'styled-components';
import { bgDarkGreen, blue, lightGray, lightGreen } from '../UI/colorVar';


export const CardCharacter = styled.div`
    background-color: ${lightGreen};
    width: 100%;
    height: 200px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    cursor: pointer;
    :hover{
        transform: scale(1.05);
        border: 5px solid ${blue};
    }

    @media screen and (max-width: 480px){
      height: 150px;
      :hover{
        transform: none;
        border: none;
      }
    }
`

export const ImageCard = styled.img`
    height: 100%;
    border-radius: 10px 0 0 10px;
`

export const DivInfo = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 15px;
`

export const TitleName = styled.h3`
    color: ${bgDarkGreen};
    font-size: 1.375rem;

    @media screen and (max-width: 480px){
      font-size: 0.875rem;
    }
`

export const TagStatus = styled.p`
    background-color: ${lightGray};
    color: white;
    font-size: 0.75rem;
    padding: 1px 5px;
    border-radius: 5px;
    width: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    @media screen and (max-width: 480px){
      font-size: 0.625rem;
      margin-bottom: 10px;
    }
`

export const DivLabelProps = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 4px;
    margin-bottom: 3px;
`

export const Label = styled.p`
    font-size: 0.9375rem;
    font-weight: bold;
    color: ${lightGray};

    @media screen and (max-width: 480px){
      font-size: 0.6875rem;
    }
`

export const Props = styled.p`
    font-size: 0.9375rem;

    @media screen and (max-width: 480px){
      font-size: 0.6875rem;
    }
`

