// React and hooks
import React, { useState } from 'react';

// Components
import Modal from '../Modal';

// Style
import { neonDarkGreen, red } from '../UI/colorVar';
import * as S from './styles';


const Cards = ({image, name, status, species, gender, origin, location, subspecies}) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
        <S.CardCharacter onClick={() => setShowModal(true)}>
            <S.ImageCard src={image} alt={name} />
            <S.DivInfo>

                <S.TitleName>{name}</S.TitleName>

                {status === "Alive" && <S.TagStatus style={{backgroundColor: `${neonDarkGreen}`}}>{status}</S.TagStatus>}
                {status === "Dead" && <S.TagStatus style={{backgroundColor: `${red}`}}>{status}</S.TagStatus>}
                {status === "unknown" && <S.TagStatus>{status}</S.TagStatus>}

                <S.DivLabelParagraph>
                    <S.Label>Species:</S.Label>
                    <S.Props>{species}</S.Props>
                </S.DivLabelParagraph>

                <S.DivLabelParagraph>
                    <S.Label>Gender:</S.Label>
                    <S.Props>{gender}</S.Props>
                </S.DivLabelParagraph>

            </S.DivInfo>
        </S.CardCharacter>

        {showModal
        &&
        <Modal
            image={image}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin}
            location={location}
            subspecies={subspecies}
            showModal={showModal}
            setShowModal={setShowModal}
        />}
    </>
  );
};

export default Cards;
