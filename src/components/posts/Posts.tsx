import  React  from 'react';
import { S } from './PostsStyles';
import { PostsList } from '../postslist/PostsList';
import { SendMessageTextarea } from '../sendmessagetextarea/SendMessageTextarea';
import { UserPosts } from '../../reducers/profileReducer';

type PostsPropsTypes = {
    userPosts: UserPosts
}

export const Posts: React.FC<PostsPropsTypes> = ({userPosts}) => {
    return(
        <S.Posts>
            <S.SectionTitlte>Posts</S.SectionTitlte>
            <SendMessageTextarea/>
            <PostsList userPosts={userPosts}/>
        </S.Posts>
    )
}