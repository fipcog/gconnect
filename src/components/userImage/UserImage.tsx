import  React  from 'react';
import { FlexWrapper } from '../FlexWrapper';
import styled from 'styled-components';
import { theme } from '../../style/Theme';

type PropTypes = {
    image: string
    width?: string
    height?: string
    margin?: string
    alt?: string
}

export const UserImage: React.FC<PropTypes> = (props) => {
    return(
        <FlexWrapper width={props.width || '80px'} height={props.height || '80px'} margin={props.margin || '0'}>
            <StyledUserImage src={props.image} alt={props.alt ? props.alt : 'user avatar'}/>
        </FlexWrapper>
    )
}       

const StyledUserImage = styled.img`
    width: 100%;

    object-fit: cover;
    border-radius: 50%;

    background-color: ${theme.colors.accent};
`