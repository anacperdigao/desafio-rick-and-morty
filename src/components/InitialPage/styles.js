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
    font-size: 4.5rem;
    letter-spacing: 0.1rem;
    word-spacing: 0.3rem;

    @media screen and (max-width: 480px){
      font-size: 3.5rem;
    }
`

export const SubTitle = styled.h2`
    color: ${yellow};
    font-size: 1.5rem;
    margin-bottom: 20px;
    word-spacing: 0.2rem;

    @media screen and (max-width: 480px){
      font-size: 1rem;
    }
`

export const Button = styled.button`
    background-color: ${neonDarkGreen};
    font-weight: 600;
    font-size: 0.9rem;
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
