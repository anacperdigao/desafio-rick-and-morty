import styled from "styled-components";
import { neonDarkGreen, yellow } from "../UI/colorVar";


export const DivPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
    position: relative;
    height: 100vh;
    width: 100vw;
`

export const ImgBackground = styled.img`
  opacity: 0.3;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;

  @media screen and (max-width: 480px){
    width: auto;
    height: 100%;
    left: -300px;
  }
`

export const DivInfo = styled.div`
    position: relative;
`

export const Title = styled.h1`
    color: white;
    font-size: 68px;
    letter-spacing: 1px;
    word-spacing: 5px;

    @media screen and (max-width: 480px){
      font-size: 54px;
    }
`

export const SubTitle = styled.h2`
    color: ${yellow};
    font-size: 20px;
    margin-bottom: 20px;
    word-spacing: 2px;

    @media screen and (max-width: 480px){
      font-size: 16px;
    }
`

export const Button = styled.button`
    background-color: ${neonDarkGreen};
    letter-spacing: 1px;
    font-weight: 600;
    font-size: 14px;
    color: white;
    height: 40px;
    width: 150px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    :hover{
        transform: scale(1.05);
        opacity: 0.9;
    }
`
