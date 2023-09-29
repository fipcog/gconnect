import  React  from 'react';
import { S } from './PostsListStyles';
import image from '../../assets/userimage.jpg'
import { Post } from '../post/Post';

export const PostsList: React.FC = () => {
    return(
        <S.PostsList>
            <Post image={image}>Why nobody loves me</Post>
            <Post image={image}>Why nobody loves me</Post>
            <Post image={image}>Why nobody loves me</Post>
            <Post image={image}>Why nobody loves me</Post>
        </S.PostsList>
    )
}