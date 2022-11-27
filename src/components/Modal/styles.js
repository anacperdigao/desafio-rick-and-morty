import styled from 'styled-components';
import { bgDarkGreen, lightGray, lightGreen, red } from '../UI/colorVar'


export const DivShowModal = styled.div`
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.7);
    border: none;
    line-height: 26px;
`

export const Dialog = styled.dialog`
    border: none;
    border-radius: 10px;
    width: 700px;
    height: 400px;
    padding: 20px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 480px){
      width: 300px;
      height: 650px;
    }
`

export const CardCharacter = styled.div`
    background-color: ${lightGreen};
    width: 100%;
    height: 310px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;

    @media screen and (max-width: 480px){
      flex-direction: column;
      height: 90%;
    }
`

export const ImageCard = styled.img`
    height: 100%;
    border-radius: 10px 0 0 10px;

    @media screen and (max-width: 480px){
      height: 250px;
      border-radius: 10px 10px 0 0;
    }
`

export const DivInfo = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
`

export const TitleName = styled.h3`
    color: ${bgDarkGreen};
    font-size: 1.625rem;
    margin-bottom: 5px;

    @media screen and (max-width: 480px){
      font-size: 1.375rem;
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
      margin-bottom: 5px;
      width: 60px;
      padding: 0px 5px;
    }
`

export const DivLabelProps = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 4px;
    margin-bottom: 5px;

    @media screen and (max-width: 480px){
      margin-bottom: 0px;
    }
`

export const DivLabelPropsColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
`

export const Label = styled.p`
    font-size: 0.875rem;
    font-weight: bold;
    color: ${lightGray};

    @media screen and (max-width: 480px){
      font-size: 0.625rem;
    }
`

export const Props = styled.p`
    font-size: 0.875rem;

    @media screen and (max-width: 480px){
      font-size: 0.625rem;
    }
`

export const Button = styled.button`
    background-color: ${red};
    font-size: .875rem;
    color: ${lightGreen};
    height: 40px;
    width: 100px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    :hover{
        opacity: 0.9;
    }
`
