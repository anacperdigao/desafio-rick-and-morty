import styled from 'styled-components';
import { bgDarkGreen, lightGray, lightGreen, red } from '../UI/colorVar'


export const ShowCharacter = styled.div`
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
    font-size: 26px;
    margin-bottom: 5px;

    @media screen and (max-width: 480px){
      font-size: 22px;
    }
`

export const TagStatus = styled.p`
    background-color: ${lightGray};
    color: white;
    font-size: 12px;
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

export const DivLabelParagraph = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 4px;
    margin-bottom: 5px;

    @media screen and (max-width: 480px){
      font-size: 10px;
      margin-bottom: 0px;
    }
`

export const DivLabelParagraphColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
`

export const Label = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: ${lightGray};

    @media screen and (max-width: 480px){
      font-size: 10px;
    }
`

export const Props = styled.p`
    font-size: 15px;

    @media screen and (max-width: 480px){
      font-size: 11px;
    }
`

export const Button = styled.button`
    background-color: ${red};
    font-size: 14px;
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
