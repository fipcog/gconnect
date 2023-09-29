import  React  from 'react';
import { FlexWrapper } from '../FlexWrapper';
import styled from 'styled-components';

type PropTypes = {
    image: string
    width?: string
    height?: string
    margin?: string
}

export const UserImage: React.FC<PropTypes> = (props) => {
    return(
        <FlexWrapper width={props.width || '80px'} height={props.height || '80px'} margin={props.margin || '0'}>
            <StyledUserImage src={props.image} />
        </FlexWrapper>
    )
}       

const StyledUserImage = styled.img`
    object-fit: cover;
    border-radius: 50%;
`