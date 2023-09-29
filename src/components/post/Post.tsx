import  React  from 'react';
import { S } from './PostStyles';
import { UserImage } from '../userImage/UserImage';

type PostPropTypes = {
    image: string
    children: string
}

export const Post: React.FC<PostPropTypes> = (props) => {
    return(
        <S.Post>
            <UserImage image={props.image} width='50px' height='50px'/>
            <S.UserMessage>{props.children}</S.UserMessage>
        </S.Post>
    )
}