import styled from "styled-components";
import { lightGreen, neonGreen } from "../UI/colorVar";


export const DivPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const DivTitles = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 0px;
`

export const ImageLogo = styled.img`
    height: 450px;
    width: 450px;
    border-radius: 50%;
    cursor: pointer;
    
    :hover{
        box-shadow: 0 0 .2rem white,
            0 0 .2rem white,
            0 0 0.8rem ${neonGreen},
            0 0 2.8rem ${lightGreen},
            inset 0 0 1.5rem ${lightGreen};
        transition: 0.1s;
    }
`

export const Title1 = styled.h1`
    color: white;
    font-size: 56px;
    letter-spacing: 5px;
`

export const Title2 = styled.h2`
    color: ${neonGreen};
    font-size: 20px;
    letter-spacing: 2px;
    
`

