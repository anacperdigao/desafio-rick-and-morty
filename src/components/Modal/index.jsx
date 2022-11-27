// React and hooks
import React from 'react';

// Style
import { neonDarkGreen, red } from '../UI/colorVar';
import * as S from './styles';


const Modal = ({image, name, status, species, gender, origin, showModal, setShowModal, location, subspecies}) => {


  return (

    <S.DivShowModal>
        <S.Dialog open={showModal}>

            <S.CardCharacter>
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
                        <S.Label>Subspecies:</S.Label>
                        <S.Props>{subspecies === "" ? species : subspecies}</S.Props>
                    </S.DivLabelParagraph>

                    <S.DivLabelParagraph>
                        <S.Label>Gender:</S.Label>
                        <S.Props>{gender}</S.Props>
                    </S.DivLabelParagraph>

                    <S.DivLabelParagraph>
                        <S.Label>Origin:</S.Label>
                        <S.Props>{origin}</S.Props>
                    </S.DivLabelParagraph>

                    <S.DivLabelParagraphColumn>
                        <S.Label>Last known location:</S.Label>
                        <S.Props>{location}</S.Props>
                    </S.DivLabelParagraphColumn>

                </S.DivInfo>

            </S.CardCharacter>

            <S.Button onClick={() => setShowModal(false)}>Back</S.Button>

        </S.Dialog>
    </S.DivShowModal>
  );
};

export default Modal;
