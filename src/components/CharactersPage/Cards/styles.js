import styled from 'styled-components'
import { bgDarkGreen, lightGray, lightGreen } from '../../UI/colorVar'


export const CardCharacter = styled.div`
    background-color: ${lightGreen};
    width: 100%;
    height: 200px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
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
    font-size: 22px;
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
`

export const DivLabelParagraph = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 4px;
    margin-bottom: 3px;
`

export const Label = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: ${lightGray}
`

export const Props = styled.p`
    font-size: 15px;
`

