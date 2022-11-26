import React, { useState } from 'react'
import Character from '../Character'
import { lightGray, neonGreen, red } from '../UI/colorVar'
import * as S from './styles'


const Cards = ({image, name, status, species, gender, origin, location, subspecies}) => {

    const [showCharacter, setShowCharacter] = useState(false)

    return (
        <>
            <S.CardCharacter onClick={() => setShowCharacter(true)}>
                <S.ImageCard src={image} alt={name} />
                <S.DivInfo>
                    <S.TitleName>{name}</S.TitleName>

                    {status === "Alive" && <S.TagStatus style={{backgroundColor: `${neonGreen}`}}>{status}</S.TagStatus>}
                    {status === "Dead" && <S.TagStatus style={{backgroundColor: `${red}`}}>{status}</S.TagStatus>}
                    {status === "unknown" && <S.TagStatus style={{backgroundColor: `${lightGray}`}}>{status}</S.TagStatus>}
                    
                    <S.DivLabelParagraph>
                        <S.Label>Species:</S.Label>
                        <S.Props>{species}</S.Props>
                    </S.DivLabelParagraph>

                    <S.DivLabelParagraph>
                        <S.Label>Gender:</S.Label>
                        <S.Props>{gender}</S.Props>
                    </S.DivLabelParagraph>

                    <S.DivLabelParagraph>
                        <S.Label>Origin:</S.Label>
                        <S.Props>{origin}</S.Props>
                    </S.DivLabelParagraph>

                </S.DivInfo>
            </S.CardCharacter>
            
            {showCharacter 
            && 
            <Character 
                image={image} 
                name={name} 
                status={status} 
                species={species} 
                gender={gender} 
                origin={origin}
                location={location}
                subspecies={subspecies}
                showCharacter={showCharacter}
                setShowCharacter={setShowCharacter}
            />}
        </>
    )
}

export default Cards