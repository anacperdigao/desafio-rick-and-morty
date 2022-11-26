import styled from 'styled-components'
import { lightGray, lightGreen } from '../UI/colorVar'


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
`

export const DivName = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

export const DivStatus = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

export const DivGender = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

export const InputName = styled.input`
    height: 40px;
    width: 300px;
    padding: 5px 10px;
    outline: none;
    border-radius: 5px;
    border: none;
    font-size: 16px;
`

export const Select = styled.select`
    height: 40px;
    width: 150px;
    padding: 5px 10px;
    outline: none;
    border-radius: 5px;
    border: none;
    font-size: 16px;
`
export const Label = styled.label`
    font-size: 20px;
    color: ${lightGreen};
`