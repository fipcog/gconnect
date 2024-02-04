import React from 'react';
import { FlexWrapper } from '../FlexWrapper';
import styled from 'styled-components';
import { theme } from '../../style/Theme';
import defaultImage from '../../assets/defaultUserAvatarImage.png'

type PropTypes = {
    image?: string
    width?: string
    height?: string
    margin?: string
    alt?: string
}

export const UserImage: React.FC<PropTypes> = (props) => {
    return (
        <FlexWrapper width={props.width || '80px'} height={props.height || '80px'} margin={props.margin || '0'}>
            <StyledUserImage src={props.image || defaultImage} alt={props.alt ? props.alt : 'user avatar'} />
        </FlexWrapper>
    )
}

const StyledUserImage = styled.img`
    width: inherit;

    object-fit: cover;
    border-radius: 50%;
`