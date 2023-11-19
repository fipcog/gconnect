import  React  from 'react';
import { S } from './PostsListStyles';
import image from '../../assets/userimage.jpg'
import { Post } from '../post/Post';
import { UserPosts } from '../../reducers/profileReducer';


type PostsListPropsTypes = {
    userPosts: UserPosts
}

export const PostsList: React.FC<PostsListPropsTypes> = ({userPosts}) => {
    return(
        <S.PostsList>
            {userPosts.map(post => <Post key={post.id} image={image}>{post.post}</Post>)}
        </S.PostsList>
    )
}